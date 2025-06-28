# User Authentication System with 2FA

This repository contains a comprehensive user authentication system with two-factor authentication (2FA) support and secure password storage.

## Features

### Security Features
- **Secure Password Hashing**: Uses bcrypt with salt for password storage
- **Two-Factor Authentication (2FA)**: TOTP-based 2FA using authenticator apps
- **Verification Codes**: Email/SMS verification with expiration and rate limiting
- **Input Validation**: Comprehensive validation for user inputs
- **Secure Random Generation**: Uses cryptographically secure random number generation

### Authentication Flow
1. **User Registration**: Secure user registration with password validation
2. **Basic Authentication**: Username/password verification
3. **2FA Setup**: QR code generation for authenticator apps
4. **2FA Login**: Complete login flow with optional 2FA verification
5. **Verification Codes**: Email/SMS verification for additional security

## Dependencies

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Required packages:
- `bcrypt==4.1.2` - Secure password hashing
- `pyotp==2.9.0` - TOTP (Time-based One-Time Password) implementation
- `qrcode==7.4.2` - QR code generation for 2FA setup

## Usage

### Basic Usage

```python
from auth import register_user, login_user, setup_user_2fa, enable_user_2fa

# Register a new user
success, message = register_user("username", "user@example.com", "secure_password")

# Login without 2FA
success, message = login_user("username", "secure_password")

# Setup 2FA
success, message, qr_uri = setup_user_2fa("username")
# User scans QR code with authenticator app

# Enable 2FA with verification code
success, message = enable_user_2fa("username", "123456")

# Login with 2FA
success, message = login_user("username", "secure_password", "123456")
```

### Advanced Usage

```python
from auth import auth_system

# Access the full authentication system
auth = auth_system

# Generate verification codes
success, message, code = auth.generate_verification_code("username", "email")

# Verify email/SMS codes
success, message = auth.verify_email_sms_code("username", code, "email")

# Get user information
user = auth.get_user("username")
```

## API Reference

### Core Functions

#### `register_user(username: str, email: str, password: str) -> Tuple[bool, str]`
Register a new user with secure password hashing.

#### `login_user(username: str, password: str, totp_code: Optional[str] = None) -> Tuple[bool, str]`
Complete login flow with optional 2FA verification.

#### `setup_user_2fa(username: str) -> Tuple[bool, str, Optional[str]]`
Setup 2FA for a user and return QR code URI.

#### `enable_user_2fa(username: str, verification_code: str) -> Tuple[bool, str]`
Enable 2FA after verifying setup code.

### AuthenticationSystem Class

#### Password Management
- `hash_password(password: str) -> str`: Hash password with bcrypt
- `verify_password(password: str, password_hash: str) -> bool`: Verify password

#### User Management
- `register_user(username, email, password)`: Register new user
- `authenticate_user(username, password)`: First factor authentication
- `get_user(username)`: Get user object
- `list_users()`: List all registered users

#### 2FA Management
- `setup_2fa(username)`: Setup TOTP 2FA
- `enable_2fa(username, code)`: Enable 2FA
- `verify_2fa_code(username, code)`: Verify TOTP code

#### Verification Codes
- `generate_verification_code(username, purpose)`: Generate verification code
- `verify_email_sms_code(username, code, purpose)`: Verify verification code

## Testing

Run the comprehensive test suite:

```bash
python test_auth.py
```

The test suite covers:
- Password hashing and verification
- User registration validation
- Basic authentication
- 2FA setup and verification
- Complete 2FA login flow
- Email/SMS verification codes

## Demo

Run the interactive demo to see all features in action:

```bash
python demo_auth.py
```

The demo showcases:
- User registration
- Basic login
- 2FA setup with QR code
- 2FA enabling
- 2FA login flow
- Verification codes
- User information display

## Security Considerations

### Password Security
- Passwords are hashed using bcrypt with automatically generated salts
- Minimum password length of 8 characters enforced
- Password hashes are never stored in plain text

### 2FA Security
- TOTP secrets are generated using cryptographically secure random data
- QR codes contain standard `otpauth://` URIs compatible with authenticator apps
- TOTP codes have a 30-second validity window with 1-step tolerance

### Verification Codes
- 6-digit verification codes generated using secure random numbers
- Codes expire after 5 minutes
- Rate limiting: maximum 3 attempts per code
- Codes are single-use and cannot be reused

### Data Storage
- In-memory storage for demonstration (use proper database in production)
- User data includes username, email, password hash, and 2FA settings
- No sensitive data is logged or exposed

## Production Considerations

For production deployment, consider:

1. **Database**: Replace in-memory storage with a proper database (PostgreSQL, MySQL, etc.)
2. **Email/SMS**: Integrate with actual email/SMS services (SendGrid, Twilio, etc.)
3. **Session Management**: Implement proper session handling and JWT tokens
4. **Rate Limiting**: Add comprehensive rate limiting for all endpoints
5. **Logging**: Implement security logging and monitoring
6. **Encryption**: Add encryption for data at rest
7. **Environment Variables**: Use environment variables for secrets and configuration

## Architecture

```
auth.py
├── User class - User data model
├── AuthenticationSystem class - Main authentication logic
│   ├── Password Management (bcrypt)
│   ├── User Registration & Authentication
│   ├── 2FA Setup & Verification (TOTP)
│   └── Email/SMS Verification Codes
└── Convenience Functions - Simple API wrappers
```

## Contributing

1. Ensure all tests pass: `python test_auth.py`
2. Follow the existing code style and security practices
3. Add tests for new functionality
4. Update documentation as needed

## License

This project is part of the `pretty-evil` repository. Refer to the main repository for licensing information.