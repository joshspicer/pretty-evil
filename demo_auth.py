#!/usr/bin/env python3
"""
Demo script for the authentication system.
This script demonstrates the complete authentication flow including 2FA setup.
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from auth import auth_system, register_user, login_user, setup_user_2fa, enable_user_2fa
import pyotp
import qrcode
from io import StringIO


def print_separator():
    """Print a visual separator."""
    print("\n" + "="*60 + "\n")


def demo_user_registration():
    """Demonstrate user registration."""
    print("🔐 DEMO: User Registration")
    print_separator()
    
    # Register a new user
    username = "demo_user"
    email = "demo@example.com"
    password = "SecurePass123!"
    
    print(f"Registering user: {username}")
    print(f"Email: {email}")
    print(f"Password: {'*' * len(password)}")
    
    success, message = register_user(username, email, password)
    
    if success:
        print(f"✅ {message}")
    else:
        print(f"❌ {message}")
    
    return success


def demo_basic_login():
    """Demonstrate basic login without 2FA."""
    print("🔑 DEMO: Basic Login (without 2FA)")
    print_separator()
    
    username = "demo_user"
    password = "SecurePass123!"
    
    print(f"Attempting login for user: {username}")
    
    success, message = login_user(username, password)
    
    if success:
        print(f"✅ {message}")
    else:
        print(f"❌ {message}")
    
    return success


def demo_2fa_setup():
    """Demonstrate 2FA setup."""
    print("🛡️ DEMO: Setting up Two-Factor Authentication")
    print_separator()
    
    username = "demo_user"
    
    print(f"Setting up 2FA for user: {username}")
    
    success, message, qr_uri = setup_user_2fa(username)
    
    if success:
        print(f"✅ {message}")
        print(f"\n📱 QR Code URI for authenticator app:")
        print(f"{qr_uri}")
        
        # Get the TOTP secret for demonstration
        user = auth_system.get_user(username)
        if user and user.totp_secret:
            print(f"\n🔑 TOTP Secret (for manual entry): {user.totp_secret}")
            
            # Generate current TOTP code for demo
            totp = pyotp.TOTP(user.totp_secret)
            current_code = totp.now()
            
            print(f"\n📲 Current TOTP code: {current_code}")
            print("   (This code changes every 30 seconds)")
            
            return current_code
    else:
        print(f"❌ {message}")
        return None


def demo_2fa_enable(totp_code):
    """Demonstrate enabling 2FA."""
    print("✅ DEMO: Enabling Two-Factor Authentication")
    print_separator()
    
    username = "demo_user"
    
    print(f"Enabling 2FA for user: {username}")
    print(f"Using verification code: {totp_code}")
    
    success, message = enable_user_2fa(username, totp_code)
    
    if success:
        print(f"✅ {message}")
    else:
        print(f"❌ {message}")
    
    return success


def demo_2fa_login():
    """Demonstrate login with 2FA."""
    print("🔐 DEMO: Login with Two-Factor Authentication")
    print_separator()
    
    username = "demo_user"
    password = "SecurePass123!"
    
    # Get fresh TOTP code
    user = auth_system.get_user(username)
    if user and user.totp_secret:
        totp = pyotp.TOTP(user.totp_secret)
        current_code = totp.now()
        
        print(f"Attempting 2FA login for user: {username}")
        print(f"Using TOTP code: {current_code}")
        
        success, message = login_user(username, password, current_code)
        
        if success:
            print(f"✅ {message}")
        else:
            print(f"❌ {message}")
        
        return success
    else:
        print("❌ No TOTP secret found for user")
        return False


def demo_verification_codes():
    """Demonstrate email/SMS verification codes."""
    print("📧 DEMO: Email/SMS Verification Codes")
    print_separator()
    
    username = "demo_user"
    
    print(f"Generating email verification code for: {username}")
    
    success, message, code = auth_system.generate_verification_code(username, "email")
    
    if success:
        print(f"✅ {message}")
        print(f"📧 Verification code: {code}")
        
        # Verify the code
        print(f"\nVerifying the code: {code}")
        verify_success, verify_message = auth_system.verify_email_sms_code(username, code, "email")
        
        if verify_success:
            print(f"✅ {verify_message}")
        else:
            print(f"❌ {verify_message}")
        
        return verify_success
    else:
        print(f"❌ {message}")
        return False


def show_user_info():
    """Show information about registered users."""
    print("👥 DEMO: User Information")
    print_separator()
    
    users = auth_system.list_users()
    print(f"Registered users: {len(users)}")
    
    for username in users:
        user = auth_system.get_user(username)
        if user:
            print(f"\n👤 Username: {user.username}")
            print(f"   📧 Email: {user.email}")
            print(f"   🛡️ 2FA Enabled: {'Yes' if user.is_2fa_enabled else 'No'}")
            print(f"   📅 Created: {user.created_at}")


def run_demo():
    """Run the complete authentication demo."""
    print("🚀 Authentication System Demo")
    print("Showcasing user registration, login, and 2FA functionality")
    print_separator()
    
    # Step 1: User Registration
    if not demo_user_registration():
        print("Demo failed at user registration step")
        return False
    
    # Step 2: Basic Login
    if not demo_basic_login():
        print("Demo failed at basic login step")
        return False
    
    # Step 3: 2FA Setup
    totp_code = demo_2fa_setup()
    if not totp_code:
        print("Demo failed at 2FA setup step")
        return False
    
    # Step 4: Enable 2FA
    if not demo_2fa_enable(totp_code):
        print("Demo failed at 2FA enable step")
        return False
    
    # Step 5: 2FA Login
    if not demo_2fa_login():
        print("Demo failed at 2FA login step")
        return False
    
    # Step 6: Verification Codes
    if not demo_verification_codes():
        print("Demo failed at verification codes step")
        return False
    
    # Step 7: Show User Info
    show_user_info()
    
    print_separator()
    print("🎉 Demo completed successfully!")
    print("All authentication features are working correctly.")
    
    return True


if __name__ == "__main__":
    success = run_demo()
    sys.exit(0 if success else 1)