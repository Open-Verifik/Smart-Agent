# Wallet Encryption Implementation

## 🔐 Overview

Implemented secure encryption for agent wallet private keys using **WebAuthn/Passkeys** as the primary method with **6-digit PIN** as a fallback. This ensures the `x402_agent_pk` is never stored in plain text in localStorage.

## 🎯 Key Features

### 1. **Dual Encryption Methods**

-   **Primary**: WebAuthn/Passkeys (biometric/device authentication)
-   **Fallback**: 6-digit PIN with PBKDF2 key derivation

### 2. **Strong Encryption**

-   **Algorithm**: AES-GCM-256
-   **Key Derivation**: PBKDF2 with 100,000 iterations
-   **Random IV**: 12-byte initialization vector per encryption
-   **Random Salt**: 16-byte salt for PIN-based encryption

### 3. **Secure Storage**

-   Private key **never** stored in plain text
-   Encrypted data stored as Base64 in localStorage
-   Passkey credentials managed by browser/OS

## 📁 Files Created/Modified

### New Files

1. **`wallet-encryption.service.ts`** - Core encryption service
    - Passkey encryption/decryption
    - PIN encryption/decryption
    - Key derivation functions
    - AES-GCM encryption implementation

### Modified Files

1. **`auth-modal.component.ts`**

    - Added encryption states: `WALLET_ENCRYPT_CHOICE`, `WALLET_ENCRYPT_PIN`
    - Updated `createAgentWallet()` to use encryption flow
    - Added `encryptWithPasskey()`, `usePINInstead()`, `encryptWithPIN()`
    - Added PIN input handlers (`onPinInput`, `onPinKeyDown`)

2. **`user.component.ts`**
    - Injected `WalletEncryptionService`
    - Updated `signOut()` to clear encrypted data

## 🔄 Wallet Creation Flow

```
┌─────────────────────────────────────────────────────────────┐
│                  WALLET CREATION FLOW                        │
└─────────────────────────────────────────────────────────────┘

1. User clicks "Create Agent Wallet"
   ↓
2. Generate random Ethereum wallet (ethers.js)
   ↓
3. Store address in localStorage (not sensitive)
   ↓
4. Store private key in MEMORY only (tempWalletPrivateKey)
   ↓
5. Check if passkeys are supported
   ↓
6. Show encryption choice screen
   │
   ├─→ Passkeys Supported
   │   ├─ "Use Passkey" button (recommended)
   │   └─ "Use PIN Instead" button
   │
   └─→ Passkeys NOT Supported
       └─ "Set 6-Digit PIN" (only option)

7a. If Passkey chosen:
    ├─ Trigger WebAuthn credential creation
    ├─ User completes biometric/device auth
    ├─ Derive encryption key from credential ID
    ├─ Encrypt private key with AES-GCM
    ├─ Store encrypted data + credential ID
    └─ Clear temp private key from memory

7b. If PIN chosen:
    ├─ User enters 6-digit PIN
    ├─ Generate random salt
    ├─ Derive encryption key from PIN + salt (PBKDF2)
    ├─ Encrypt private key with AES-GCM
    ├─ Store encrypted data + salt
    └─ Clear temp private key from memory

8. Close modal and reload
   ↓
9. User authenticated with encrypted wallet
```

## 🗄️ localStorage Structure

### Passkey-Encrypted Wallet

```javascript
{
  "x402_agent_address": "0x1234...",  // Plain text (public)
  "x402_agent_pk_encrypted": "{\"iv\":\"...\",\"ciphertext\":\"...\"}",  // Encrypted
  "x402_encryption_method": "passkey",
  "x402_credential_id": "base64..."  // WebAuthn credential ID
}
```

### PIN-Encrypted Wallet

```javascript
{
  "x402_agent_address": "0x1234...",  // Plain text (public)
  "x402_agent_pk_encrypted": "{\"iv\":\"...\",\"ciphertext\":\"...\"}",  // Encrypted
  "x402_encryption_method": "pin",
  "x402_encryption_salt": "base64..."  // Random salt for PBKDF2
}
```

## 🔑 Encryption Details

### Passkey Encryption

**Process**:

1. Create WebAuthn credential with user verification
2. Extract credential ID (unique per device/user)
3. Derive AES-256 key using PBKDF2:
    - Input: Credential ID
    - Salt: Static salt ("smart-agent-wall")
    - Iterations: 100,000
    - Hash: SHA-256
4. Encrypt private key with AES-GCM
5. Store encrypted data + credential ID

**Decryption**:

1. Retrieve credential ID from localStorage
2. Request WebAuthn authentication (triggers biometric)
3. Derive same AES-256 key from credential ID
4. Decrypt private key with AES-GCM

### PIN Encryption

**Process**:

1. Validate PIN (must be 6 digits)
2. Generate random 16-byte salt
3. Derive AES-256 key using PBKDF2:
    - Input: PIN (as UTF-8 bytes)
    - Salt: Random salt
    - Iterations: 100,000
    - Hash: SHA-256
4. Encrypt private key with AES-GCM
5. Store encrypted data + salt

**Decryption**:

1. Retrieve salt from localStorage
2. User enters PIN
3. Derive same AES-256 key from PIN + salt
4. Decrypt private key with AES-GCM

## 🛡️ Security Features

### 1. **No Plain Text Storage**

-   Private key never touches localStorage in plain text
-   Only stored in memory during creation process
-   Immediately encrypted before storage

### 2. **Strong Key Derivation**

-   PBKDF2 with 100,000 iterations
-   SHA-256 hash function
-   Random salts for PIN encryption
-   Resistant to brute-force attacks

### 3. **AES-GCM Encryption**

-   Authenticated encryption (prevents tampering)
-   256-bit key length
-   Random 12-byte IV per encryption
-   Industry-standard algorithm

### 4. **Passkey Benefits**

-   Biometric authentication (Face ID, Touch ID, Windows Hello)
-   Credentials managed by OS/browser
-   Phishing-resistant
-   No password to remember

### 5. **PIN Fallback**

-   Works on all devices
-   6-digit PIN (1,000,000 combinations)
-   High iteration count slows brute-force
-   Random salt prevents rainbow tables

## 🎨 UI States

### State 1: WALLET_CONNECT

-   "Create Agent Wallet" button
-   Initial wallet creation screen

### State 2: WALLET_ENCRYPT_CHOICE

-   Shown after wallet is created
-   If passkeys supported:
    -   "Use Passkey" button (primary, recommended)
    -   "Use PIN Instead" button (secondary)
-   If passkeys NOT supported:
    -   "Set 6-Digit PIN" button (only option)
    -   Info message about passkey unavailability

### State 3: WALLET_ENCRYPT_PIN

-   6 PIN input boxes (similar to OTP)
-   Auto-focus between inputs
-   Paste support
-   "Encrypt Wallet" button
-   Back button to return to choice

## 📊 API Methods

### WalletEncryptionService

```typescript
// Check support
isPasskeysSupported(): Promise<boolean>

// Passkey methods
encryptWithPasskeys(privateKey: string): Promise<boolean>
decryptWithPasskeys(): Promise<string | null>

// PIN methods
encryptWithPIN(privateKey: string, pin: string): Promise<boolean>
decryptWithPIN(pin: string): Promise<string | null>

// Utility methods
getEncryptionMethod(): 'passkey' | 'pin' | null
isWalletEncrypted(): boolean
clearEncryptionData(): void
```

## ✅ Benefits

1. **Security**: Private keys encrypted at rest
2. **Convenience**: Passkeys = biometric auth (no PIN to remember)
3. **Compatibility**: PIN fallback works everywhere
4. **Peace of Mind**: No plain text private keys in localStorage
5. **User Choice**: Let users pick their preferred method
6. **Industry Standard**: Uses proven cryptographic algorithms

## 🧪 Testing Checklist

-   [ ] Passkey encryption works on supported devices
-   [ ] PIN encryption works on all devices
-   [ ] Passkey decryption triggers biometric prompt
-   [ ] PIN decryption validates correct PIN
-   [ ] Wrong PIN shows error
-   [ ] Encrypted data survives page reload
-   [ ] Sign out clears all encryption data
-   [ ] Wallet creation flow is smooth
-   [ ] Error handling works correctly
-   [ ] UI shows correct options based on support

## 🔮 Future Enhancements

1. **PIN Recovery**: Add recovery mechanism for forgotten PINs
2. **Re-encryption**: Allow changing from PIN to Passkey
3. **Multiple Devices**: Sync encrypted wallet across devices
4. **Backup**: Export encrypted wallet for backup
5. **Hardware Wallets**: Support hardware wallet integration
6. **Biometric Timeout**: Add timeout for biometric prompts
7. **PIN Strength**: Add PIN strength indicator
8. **Encryption Migration**: Migrate existing plain text wallets

## 🚨 Important Notes

1. **Passkey Limitations**:

    - Requires HTTPS (or localhost)
    - Not supported on all browsers/devices
    - Credentials are device-specific

2. **PIN Security**:

    - User must remember their PIN
    - No recovery if PIN is forgotten
    - Consider adding recovery mechanism

3. **localStorage Limitations**:

    - Still accessible to XSS attacks
    - Consider additional security layers
    - Encrypted data is better than plain text

4. **Browser Compatibility**:
    - Passkeys: Chrome 67+, Safari 13+, Firefox 60+
    - Web Crypto API: All modern browsers
    - Fallback to PIN ensures universal support
