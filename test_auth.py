#!/usr/bin/env python3
"""
Test script for the authentication system.
This script tests all the major functionality of the auth.py module.
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from auth import auth_system, register_user, login_user, setup_user_2fa, enable_user_2fa
import pyotp


def test_password_hashing():
    """Test password hashing and verification."""
    print("Testing password hashing...")
    
    password = "test_password_123"
    password_hash = auth_system.hash_password(password)
    
    # Verify correct password
    assert auth_system.verify_password(password, password_hash), "Password verification failed"
    
    # Verify incorrect password
    assert not auth_system.verify_password("wrong_password", password_hash), "Wrong password was accepted"
    
    print("✓ Password hashing tests passed")


def test_user_registration():
    """Test user registration functionality."""
    print("Testing user registration...")
    
    # Test successful registration
    success, message = register_user("testuser", "test@example.com", "password123")
    assert success, f"Registration failed: {message}"
    
    # Test duplicate username
    success, message = register_user("testuser", "test2@example.com", "password456")
    assert not success, "Duplicate username was allowed"
    
    # Test weak password
    success, message = register_user("testuser2", "test2@example.com", "weak")
    assert not success, "Weak password was allowed"
    
    # Test invalid email
    success, message = register_user("testuser3", "invalid_email", "password123")
    assert not success, "Invalid email was allowed"
    
    print("✓ User registration tests passed")


def test_basic_authentication():
    """Test basic username/password authentication."""
    print("Testing basic authentication...")
    
    # Register a test user
    register_user("authuser", "auth@example.com", "authpass123")
    
    # Test successful login without 2FA
    success, message = login_user("authuser", "authpass123")
    assert success, f"Login failed: {message}"
    
    # Test failed login with wrong password
    success, message = login_user("authuser", "wrongpass")
    assert not success, "Login succeeded with wrong password"
    
    # Test failed login with wrong username
    success, message = login_user("wronguser", "authpass123")
    assert not success, "Login succeeded with wrong username"
    
    print("✓ Basic authentication tests passed")


def test_2fa_setup_and_verification():
    """Test 2FA setup and verification."""
    print("Testing 2FA setup and verification...")
    
    # Register a test user for 2FA
    register_user("2fauser", "2fa@example.com", "2fapass123")
    
    # Setup 2FA
    success, message, qr_uri = setup_user_2fa("2fauser")
    assert success, f"2FA setup failed: {message}"
    assert qr_uri is not None, "QR URI was not generated"
    
    # Get the user to access the TOTP secret
    user = auth_system.get_user("2fauser")
    assert user is not None, "User not found"
    assert user.totp_secret is not None, "TOTP secret was not generated"
    
    # Generate a valid TOTP code using the secret
    totp = pyotp.TOTP(user.totp_secret)
    valid_code = totp.now()
    
    # Enable 2FA with valid code
    success, message = enable_user_2fa("2fauser", valid_code)
    assert success, f"2FA enable failed: {message}"
    
    # Verify 2FA is enabled
    user = auth_system.get_user("2fauser")
    assert user.is_2fa_enabled, "2FA was not enabled"
    
    print("✓ 2FA setup and verification tests passed")


def test_2fa_login_flow():
    """Test complete login flow with 2FA."""
    print("Testing 2FA login flow...")
    
    # Get the 2FA user from previous test
    user = auth_system.get_user("2fauser")
    assert user is not None and user.is_2fa_enabled, "2FA user not found or 2FA not enabled"
    
    # Generate current TOTP code
    totp = pyotp.TOTP(user.totp_secret)
    current_code = totp.now()
    
    # Test successful login with 2FA
    success, message = login_user("2fauser", "2fapass123", current_code)
    assert success, f"2FA login failed: {message}"
    
    # Test login with correct password but wrong 2FA code
    success, message = login_user("2fauser", "2fapass123", "123456")
    assert not success, "Login succeeded with wrong 2FA code"
    
    # Test login with wrong password
    success, message = login_user("2fauser", "wrongpass", current_code)
    assert not success, "Login succeeded with wrong password"
    
    print("✓ 2FA login flow tests passed")


def test_verification_codes():
    """Test email/SMS verification codes."""
    print("Testing verification codes...")
    
    # Register a user for verification testing
    register_user("verifyuser", "verify@example.com", "verifypass123")
    
    # Generate verification code
    success, message, code = auth_system.generate_verification_code("verifyuser", "email")
    assert success, f"Verification code generation failed: {message}"
    assert code is not None, "Verification code was not generated"
    assert len(code) == 6, "Verification code is not 6 digits"
    
    # Verify the code
    success, message = auth_system.verify_email_sms_code("verifyuser", code, "email")
    assert success, f"Verification code verification failed: {message}"
    
    # Try to verify the same code again (should fail as it's consumed)
    success, message = auth_system.verify_email_sms_code("verifyuser", code, "email")
    assert not success, "Verification code was accepted twice"
    
    print("✓ Verification code tests passed")


def run_all_tests():
    """Run all authentication tests."""
    print("Running authentication system tests...\n")
    
    try:
        test_password_hashing()
        test_user_registration()
        test_basic_authentication()
        test_2fa_setup_and_verification()
        test_2fa_login_flow()
        test_verification_codes()
        
        print("\n🎉 All tests passed! Authentication system is working correctly.")
        return True
    
    except AssertionError as e:
        print(f"\n❌ Test failed: {e}")
        return False
    except Exception as e:
        print(f"\n❌ Unexpected error: {e}")
        return False


if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)