"""
User Authentication Module with 2FA Support

This module provides secure user authentication functionality including:
- Secure password hashing using bcrypt
- Two-factor authentication (2FA) with TOTP
- User registration and login flows
- Verification code generation and validation
"""

import bcrypt
import pyotp
import qrcode
import secrets
import time
from typing import Dict, Optional, Tuple, Any
from io import BytesIO


class User:
    """Represents a user with authentication credentials."""
    
    def __init__(self, username: str, email: str, password_hash: str, 
                 totp_secret: Optional[str] = None, is_2fa_enabled: bool = False):
        self.username = username
        self.email = email
        self.password_hash = password_hash
        self.totp_secret = totp_secret
        self.is_2fa_enabled = is_2fa_enabled
        self.created_at = time.time()


class AuthenticationSystem:
    """Main authentication system handling user management and 2FA."""
    
    def __init__(self):
        # In-memory user storage (in production, use a proper database)
        self.users: Dict[str, User] = {}
        self.verification_codes: Dict[str, Dict[str, Any]] = {}
    
    def hash_password(self, password: str) -> str:
        """
        Hash a password using bcrypt with salt.
        
        Args:
            password: Plain text password to hash
            
        Returns:
            Hashed password as string
        """
        # Generate salt and hash password
        salt = bcrypt.gensalt()
        password_hash = bcrypt.hashpw(password.encode('utf-8'), salt)
        return password_hash.decode('utf-8')
    
    def verify_password(self, password: str, password_hash: str) -> bool:
        """
        Verify a password against its hash.
        
        Args:
            password: Plain text password to verify
            password_hash: Stored password hash
            
        Returns:
            True if password matches, False otherwise
        """
        return bcrypt.checkpw(password.encode('utf-8'), password_hash.encode('utf-8'))
    
    def register_user(self, username: str, email: str, password: str) -> Tuple[bool, str]:
        """
        Register a new user with hashed password.
        
        Args:
            username: Unique username
            email: User's email address
            password: Plain text password
            
        Returns:
            Tuple of (success: bool, message: str)
        """
        # Check if username already exists
        if username in self.users:
            return False, "Username already exists"
        
        # Validate input
        if len(password) < 8:
            return False, "Password must be at least 8 characters long"
        
        if not email or '@' not in email:
            return False, "Valid email address required"
        
        # Hash password and create user
        password_hash = self.hash_password(password)
        user = User(username, email, password_hash)
        self.users[username] = user
        
        return True, "User registered successfully"
    
    def authenticate_user(self, username: str, password: str) -> Tuple[bool, str, Optional[User]]:
        """
        Authenticate user with username and password (first factor).
        
        Args:
            username: Username to authenticate
            password: Plain text password
            
        Returns:
            Tuple of (success: bool, message: str, user: Optional[User])
        """
        # Check if user exists
        if username not in self.users:
            return False, "Invalid username or password", None
        
        user = self.users[username]
        
        # Verify password
        if not self.verify_password(password, user.password_hash):
            return False, "Invalid username or password", None
        
        # If 2FA is not enabled, authentication is complete
        if not user.is_2fa_enabled:
            return True, "Authentication successful", user
        
        # If 2FA is enabled, first factor is complete
        return True, "Password verified. Please provide 2FA code.", user
    
    def setup_2fa(self, username: str) -> Tuple[bool, str, Optional[str]]:
        """
        Set up 2FA for a user by generating TOTP secret.
        
        Args:
            username: Username to set up 2FA for
            
        Returns:
            Tuple of (success: bool, message: str, qr_code_url: Optional[str])
        """
        if username not in self.users:
            return False, "User not found", None
        
        user = self.users[username]
        
        # Generate TOTP secret
        secret = pyotp.random_base32()
        user.totp_secret = secret
        
        # Create TOTP URI for QR code
        totp_uri = pyotp.totp.TOTP(secret).provisioning_uri(
            name=user.email,
            issuer_name="Pretty Evil Auth"
        )
        
        return True, "2FA setup initiated. Scan QR code with authenticator app.", totp_uri
    
    def enable_2fa(self, username: str, verification_code: str) -> Tuple[bool, str]:
        """
        Enable 2FA for a user after verifying the setup code.
        
        Args:
            username: Username to enable 2FA for
            verification_code: 6-digit code from authenticator app
            
        Returns:
            Tuple of (success: bool, message: str)
        """
        if username not in self.users:
            return False, "User not found"
        
        user = self.users[username]
        
        if not user.totp_secret:
            return False, "2FA not set up. Please set up 2FA first."
        
        # Verify the code
        if self.verify_2fa_code(username, verification_code):
            user.is_2fa_enabled = True
            return True, "2FA enabled successfully"
        else:
            return False, "Invalid verification code"
    
    def verify_2fa_code(self, username: str, code: str) -> bool:
        """
        Verify a 2FA TOTP code.
        
        Args:
            username: Username to verify code for
            code: 6-digit TOTP code
            
        Returns:
            True if code is valid, False otherwise
        """
        if username not in self.users:
            return False
        
        user = self.users[username]
        
        if not user.totp_secret:
            return False
        
        # Create TOTP instance and verify code
        totp = pyotp.TOTP(user.totp_secret)
        return totp.verify(code, valid_window=1)  # Allow 1 time step tolerance
    
    def complete_login(self, username: str, password: str, totp_code: Optional[str] = None) -> Tuple[bool, str]:
        """
        Complete the full login process including 2FA if enabled.
        
        Args:
            username: Username to authenticate
            password: Plain text password
            totp_code: Optional 6-digit TOTP code for 2FA
            
        Returns:
            Tuple of (success: bool, message: str)
        """
        # First factor authentication
        auth_success, auth_message, user = self.authenticate_user(username, password)
        
        if not auth_success:
            return False, auth_message
        
        # If 2FA is not enabled, login is complete
        if not user.is_2fa_enabled:
            return True, "Login successful"
        
        # If 2FA is enabled, verify TOTP code
        if not totp_code:
            return False, "2FA code required"
        
        if self.verify_2fa_code(username, totp_code):
            return True, "Login successful with 2FA"
        else:
            return False, "Invalid 2FA code"
    
    def generate_verification_code(self, username: str, purpose: str = "email") -> Tuple[bool, str, Optional[str]]:
        """
        Generate a verification code for email/SMS verification.
        
        Args:
            username: Username to generate code for
            purpose: Purpose of the code (email, sms, etc.)
            
        Returns:
            Tuple of (success: bool, message: str, code: Optional[str])
        """
        if username not in self.users:
            return False, "User not found", None
        
        # Generate 6-digit verification code
        code = str(secrets.randbelow(1000000)).zfill(6)
        
        # Store code with expiration (5 minutes)
        self.verification_codes[username] = {
            'code': code,
            'purpose': purpose,
            'expires_at': time.time() + 300,  # 5 minutes
            'attempts': 0
        }
        
        return True, f"Verification code generated for {purpose}", code
    
    def verify_email_sms_code(self, username: str, code: str, purpose: str = "email") -> Tuple[bool, str]:
        """
        Verify an email/SMS verification code.
        
        Args:
            username: Username to verify code for
            code: Verification code
            purpose: Purpose of the code
            
        Returns:
            Tuple of (success: bool, message: str)
        """
        if username not in self.verification_codes:
            return False, "No verification code found"
        
        verification_data = self.verification_codes[username]
        
        # Check if code has expired
        if time.time() > verification_data['expires_at']:
            del self.verification_codes[username]
            return False, "Verification code has expired"
        
        # Check attempt limit
        if verification_data['attempts'] >= 3:
            del self.verification_codes[username]
            return False, "Too many failed attempts"
        
        # Verify code and purpose
        if (verification_data['code'] == code and 
            verification_data['purpose'] == purpose):
            del self.verification_codes[username]
            return True, "Verification successful"
        else:
            verification_data['attempts'] += 1
            return False, "Invalid verification code"
    
    def get_user(self, username: str) -> Optional[User]:
        """Get user object by username."""
        return self.users.get(username)
    
    def list_users(self) -> list:
        """List all registered usernames (for admin purposes)."""
        return list(self.users.keys())


# Global authentication system instance
auth_system = AuthenticationSystem()


def register_user(username: str, email: str, password: str) -> Tuple[bool, str]:
    """Convenience function to register a new user."""
    return auth_system.register_user(username, email, password)


def login_user(username: str, password: str, totp_code: Optional[str] = None) -> Tuple[bool, str]:
    """Convenience function to login a user."""
    return auth_system.complete_login(username, password, totp_code)


def setup_user_2fa(username: str) -> Tuple[bool, str, Optional[str]]:
    """Convenience function to setup 2FA for a user."""
    return auth_system.setup_2fa(username)


def enable_user_2fa(username: str, verification_code: str) -> Tuple[bool, str]:
    """Convenience function to enable 2FA for a user."""
    return auth_system.enable_2fa(username, verification_code)