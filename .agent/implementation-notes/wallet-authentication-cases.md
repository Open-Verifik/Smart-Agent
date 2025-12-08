# Wallet Authentication Cases - Complete Coverage

## Overview

The authentication system now supports **5 different wallet/authentication states**, each with proper detection and handling.

## Authentication Cases

### 1. **Web2 Only** (Traditional Verifik Account)

**Storage:**

-   `verifik_account` (JSON object with user data)
-   `accessToken` (JWT token)

**Detection:**

```typescript
const storedUser = localStorage.getItem("verifik_account");
if (storedUser) {
	// Web2 authenticated
}
```

**UI Display:**

-   Shows user's actual name and email
-   "Sign Out" button (full logout)
-   "Connect Web2 Account" button NOT shown

---

### 2. **Web3 Only - Agent Wallet (Encrypted with Passkey)**

**Storage:**

-   `x402_agent_address` (wallet address)
-   `x402_agent_pk_encrypted` (encrypted private key)
-   `x402_encryption_method: 'passkey'`
-   `x402_encryption_salt` (encryption salt)
-   `x402_credential_id` (WebAuthn credential ID)

**Detection:**

```typescript
const agentAddress = localStorage.getItem("x402_agent_address");
const isWalletEncrypted = this._encryptionService.isWalletEncrypted();
if (agentAddress && isWalletEncrypted) {
	// Encrypted agent wallet
}
```

**UI Display:**

-   Name: "Agent Wallet"
-   Email: Truncated address (0x1234...5678)
-   "Reset Wallet" button (clears wallet only)
-   "Connect Web2 Account" button shown

---

### 3. **Web3 Only - Agent Wallet (Encrypted with PIN)**

**Storage:**

-   `x402_agent_address` (wallet address)
-   `x402_agent_pk_encrypted` (encrypted private key)
-   `x402_encryption_method: 'pin'`
-   `x402_encryption_salt` (encryption salt)

**Detection:**

```typescript
const agentAddress = localStorage.getItem("x402_agent_address");
const isWalletEncrypted = this._encryptionService.isWalletEncrypted();
if (agentAddress && isWalletEncrypted) {
	// Encrypted agent wallet
}
```

**UI Display:**

-   Name: "Agent Wallet"
-   Email: Truncated address (0x1234...5678)
-   "Reset Wallet" button (clears wallet only)
-   "Connect Web2 Account" button shown

---

### 4. **Web3 Only - MetaMask Wallet**

**Storage:**

-   `x402_agent_address` (wallet address)
-   `x402_wallet_type: 'metamask'`

**Detection:**

```typescript
const agentAddress = localStorage.getItem("x402_agent_address");
const walletType = localStorage.getItem("x402_wallet_type");
const isMetaMaskWallet = walletType === "metamask";
if (agentAddress && isMetaMaskWallet) {
	// MetaMask wallet
}
```

**UI Display:**

-   Name: "MetaMask Wallet"
-   Email: Truncated address (0x1234...5678)
-   "Reset Wallet" button (clears wallet only)
-   "Connect Web2 Account" button shown

**Special Notes:**

-   Private key is NOT stored (managed by MetaMask)
-   Transactions must be signed through MetaMask
-   No encryption/decryption needed

---

### 5. **Web3 Only - Legacy Agent Wallet (Plain Text)**

**Storage:**

-   `x402_agent_address` (wallet address)
-   `x402_agent_pk` (plain text private key) ⚠️ DEPRECATED

**Detection:**

```typescript
const agentAddress = localStorage.getItem("x402_agent_address");
const hasPlainTextPk = !!localStorage.getItem("x402_agent_pk");
if (agentAddress && hasPlainTextPk) {
	// Legacy plain text wallet
}
```

**UI Display:**

-   Name: "Agent Wallet"
-   Email: Truncated address (0x1234...5678)
-   "Reset Wallet" button (clears wallet only)
-   "Connect Web2 Account" button shown

**Special Notes:**

-   ⚠️ **SECURITY RISK** - Private key stored in plain text
-   Only for backwards compatibility
-   Should migrate to encrypted storage

---

### 6. **Hybrid (Web2 + Web3)**

**Storage:**

-   All Web2 keys (verifik_account, accessToken)
-   All Web3 keys (any of the above wallet types)

**Detection:**

```typescript
const hasWeb2 = !!localStorage.getItem('verifik_account');
const hasWeb3 = /* any of the above Web3 checks */;
if (hasWeb2 && hasWeb3) {
  // Hybrid authentication
}
```

**UI Display:**

-   Shows user's actual name and email (from Web2)
-   "Sign Out" button (full logout, clears both)
-   "Connect Web2 Account" button NOT shown

---

## Implementation in UserComponent

### Updated ngOnInit Logic

```typescript
ngOnInit(): void {
  try {
    const storedUser = localStorage.getItem('verifik_account');
    if (storedUser) {
      // Web2 authentication exists
      this.user = JSON.parse(storedUser);
      this.hasWeb2Auth = true;
    } else {
      this.hasWeb2Auth = false;

      // Check for Web3 authentication
      const agentAddress = localStorage.getItem('x402_agent_address');
      const walletType = localStorage.getItem('x402_wallet_type');
      const isWalletEncrypted = this._encryptionService.isWalletEncrypted();
      const hasPlainTextPk = !!localStorage.getItem('x402_agent_pk');

      // Determine wallet validity
      const isMetaMaskWallet = walletType === 'metamask';
      const hasValidWallet = isWalletEncrypted || hasPlainTextPk || isMetaMaskWallet;

      if (agentAddress && hasValidWallet) {
        // Determine display name
        let walletName = 'Agent Wallet';
        if (isMetaMaskWallet) {
          walletName = 'MetaMask Wallet';
        }

        // Create mock user for Web3-only
        this.user = {
          id: agentAddress,
          name: walletName,
          email: `${agentAddress.substring(0, 6)}...${agentAddress.substring(agentAddress.length - 4)}`,
          credits: 0,
          role: 'agent',
        };
      }
    }
  } catch (error) {
    console.warn('Failed to parse user from localStorage', error);
  }
}
```

### Sign Out / Reset Wallet Logic

```typescript
signOut(): void {
  if (this.isWeb3Only) {
    this.resetWallet(); // Clear wallet only
  } else {
    this.fullSignOut(); // Clear everything
  }
}

private resetWallet(): void {
  this._encryptionService.clearEncryptionData();
  localStorage.removeItem('x402_agent_address');
  localStorage.removeItem('x402_wallet_type');
  this.user = null;
  this._router.navigate(['/']);
}

private fullSignOut(): void {
  this._authService.signOut();
  this._encryptionService.clearEncryptionData();
  localStorage.removeItem('x402_agent_address');
  localStorage.removeItem('x402_wallet_type');
  localStorage.removeItem('x402_agent_pk');
  this.user = null;
  this._router.navigate(['/sign-in']);
}
```

## Testing Checklist

-   [ ] Web2 only login works
-   [ ] Agent wallet with Passkey works
-   [ ] Agent wallet with PIN works
-   [ ] MetaMask wallet connection works
-   [ ] Legacy plain text wallet still works
-   [ ] Hybrid (Web2 + Web3) works
-   [ ] "Reset Wallet" only clears wallet data
-   [ ] "Sign Out" clears everything for Web2/Hybrid
-   [ ] "Connect Web2 Account" shows for Web3-only
-   [ ] User name shows correctly for each type
-   [ ] Page reload preserves authentication state

## Future Enhancements

1. **Wallet Type Icons** - Show different icons for MetaMask vs Agent wallets
2. **Network Detection** - Verify user is on Avalanche C-Chain
3. **Balance Display** - Show wallet balance for all wallet types
4. **Migration Tool** - Help users migrate from plain text to encrypted wallets
5. **Multiple Wallets** - Allow users to switch between wallets
6. **WalletConnect Support** - Add support for mobile wallets
7. **Zelf Wallet Support** - Add support for Zelf wallet
