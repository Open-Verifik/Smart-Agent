# Web3 Authentication Support

## Overview

Enhanced the Smart-Agent frontend to support both Web2 (traditional Verifik account) and Web3 (agent wallet) authentication methods. Users can now authenticate using either method or both simultaneously.

## Changes Made

### 1. Auth Modal Component (`auth-modal.component.ts`)

**File**: `/Users/miguel/Smart-Agent/frontend/src/app/layout/common/auth-modal/auth-modal.component.ts`

**Changes**:

-   Updated `createAgentWallet()` method to close the modal and reload the page after creating the wallet
-   This ensures the UI updates to show the authenticated state immediately after wallet creation

**Key Code**:

```typescript
createAgentWallet() {
  import('ethers').then(({ ethers }) => {
    const wallet = ethers.Wallet.createRandom();

    // Store credentials in localStorage
    localStorage.setItem('x402_agent_pk', wallet.privateKey);
    localStorage.setItem('x402_agent_address', wallet.address);

    // Close modal and reload to show authenticated state
    this._dialogRef.close(true);
    location.reload();
  });
}
```

### 2. User Component (`user.component.ts`)

**File**: `/Users/miguel/Smart-Agent/frontend/src/app/layout/common/user/user.component.ts`

**Changes**:

#### A. Enhanced `ngOnInit()` - Web3 Authentication Detection

-   Added logic to check for agent wallet credentials (`x402_agent_address` and `x402_agent_pk`) in localStorage
-   Creates a mock user object when only Web3 authentication exists (no traditional Verifik account)
-   Supports three authentication scenarios:
    1. **Web2 only**: Traditional Verifik account with `accessToken` and `verifik_account`
    2. **Web3 only**: Agent wallet with `x402_agent_address` and `x402_agent_pk`
    3. **Hybrid**: Both Web2 and Web3 credentials present

**Mock User Object Structure**:

```typescript
{
  id: agentAddress,
  name: 'Agent Wallet',
  email: '0x1234...5678', // Truncated address
  credits: 0,
  role: 'agent'
}
```

#### B. Enhanced `signOut()` - Complete Logout

-   Updated to clear both Web2 and Web3 credentials from localStorage
-   Ensures complete logout regardless of authentication method used

**Key Code**:

```typescript
signOut(): void {
  this._authService.signOut().subscribe(() => {
    this.user = null;
    this._userService.user = null as any;

    // Clear agent wallet credentials as well
    localStorage.removeItem('x402_agent_pk');
    localStorage.removeItem('x402_agent_address');

    location.reload();
  });
}
```

## Authentication Flow

### Web3 Authentication Flow

1. User clicks "Log in" button
2. Auth modal opens
3. User selects "Connect Wallet" option
4. User clicks "Create Agent Wallet"
5. System generates new Ethereum wallet using ethers.js
6. Credentials stored in localStorage:
    - `x402_agent_address`: Wallet address
    - `x402_agent_pk`: Private key
7. Modal closes and page reloads
8. UserComponent detects wallet credentials
9. Mock user object created
10. Authenticated UI displayed (user menu, wallet info, etc.)
11. **"Connect Web2 Account" button appears in user dropdown**

### Web2 Authentication Flow

1. User clicks "Log in" button
2. Auth modal opens
3. User selects email or phone authentication
4. User enters credentials and OTP
5. System validates and receives access token
6. Credentials stored in localStorage:
    - `accessToken`: JWT token
    - `verifik_account`: User account data
7. Modal closes and page reloads
8. UserComponent detects Verifik account
9. Authenticated UI displayed

### Dual-Login Flow (Web3 → Web3 + Web2)

1. User starts with Web3-only authentication (agent wallet)
2. User opens user menu dropdown
3. User sees "Connect Web2 Account" button
4. User clicks "Connect Web2 Account"
5. Auth modal opens
6. User completes email/phone authentication
7. Web2 credentials added to localStorage (wallet credentials preserved)
8. Page reloads
9. User now has hybrid authentication:
    - Full Web2 account data (name, email, credits)
    - Agent wallet with AVAX balance
    - Both displayed in UI

### Hybrid Authentication

-   Users can have both Web2 and Web3 credentials
-   Web2 credentials take precedence in the UI
-   Agent wallet info is displayed in the user menu dropdown
-   Both credential sets are cleared on logout
-   **No "Connect Web2 Account" button shown (already connected)**

## UI Behavior

### Before Authentication

-   "Log in" button displayed in header
-   No user menu or wallet information shown

### After Web3 Authentication

-   User menu button displayed with:
    -   Name: "Agent Wallet"
    -   Email: Truncated wallet address (e.g., "0x1234...5678")
    -   Credits: 0.00
    -   AVAX balance (if available)
-   User menu dropdown shows:
    -   Mock user info
    -   Agent wallet details with full address
    -   AVAX balance
    -   Role: "agent"
    -   **"Connect Web2 Account" button (indigo/blue, prominent)**
    -   Sign out button

### After Web2 Authentication

-   User menu button displayed with:
    -   Actual user name
    -   User email
    -   Credits balance
    -   AVAX balance (if agent wallet also exists)
-   User menu dropdown shows:
    -   Full user details
    -   Agent wallet section (if wallet exists)
    -   User role
    -   Sign out button

## Benefits

1. **Flexibility**: Tool can be used for Web2, Web3, or both authentication methods
2. **No Breaking Changes**: Existing Web2 authentication continues to work as before
3. **Progressive Enhancement**: Web3 features are additive and don't interfere with Web2
4. **Clean Logout**: Both credential types are properly cleared on sign out
5. **Consistent UX**: Same authenticated UI regardless of authentication method

## localStorage Keys

| Key                  | Purpose                                        | Authentication Type |
| -------------------- | ---------------------------------------------- | ------------------- |
| `accessToken`        | JWT token for API authentication               | Web2                |
| `verifik_account`    | User account data (name, email, credits, etc.) | Web2                |
| `x402_agent_address` | Ethereum wallet address                        | Web3                |
| `x402_agent_pk`      | Ethereum wallet private key                    | Web3                |

## Future Enhancements

1. **Wallet Import**: Allow users to import existing wallets instead of only creating new ones
2. **Multiple Wallets**: Support for managing multiple agent wallets
3. **Wallet Security**: Consider encrypting the private key in localStorage
4. **Web3 Provider Integration**: Connect to MetaMask or other Web3 providers
5. **On-chain Verification**: Verify wallet ownership through signature challenges
6. **Credits Bridge**: Allow transferring credits between Web2 and Web3 accounts
