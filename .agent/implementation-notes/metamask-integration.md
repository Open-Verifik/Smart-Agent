# MetaMask Integration

## Overview

Added MetaMask wallet connection functionality to the auth modal, allowing users to connect their existing MetaMask wallet instead of creating a new agent wallet.

## Implementation

### 1. TypeScript Changes (`auth-modal.component.ts`)

#### Window Interface Extension

```typescript
declare global {
	interface Window {
		ethereum?: any;
	}
}
```

#### connectMetaMask Method

-   Checks if MetaMask is installed (`window.ethereum`)
-   Requests account access via `eth_requestAccounts`
-   Stores the connected address in `localStorage` as `x402_agent_address`
-   Stores wallet type as `metamask` in `x402_wallet_type`
-   Closes modal and reloads page on success
-   Handles errors (MetaMask not installed, user rejection, etc.)

### 2. HTML Changes (`auth-modal.component.html`)

-   Added `(click)="connectMetaMask()"` to MetaMask button
-   Added `[disabled]="isLoading()"` to prevent multiple clicks

## How It Works

1. **User clicks "MetaMask" button**
2. **MetaMask popup appears** asking user to connect
3. **User approves** connection in MetaMask
4. **Address is stored** in localStorage
5. **Page reloads** and user is authenticated

## Important Notes

### Security Consideration

**MetaMask does NOT expose private keys** for security reasons. This is intentional and correct behavior.

The current implementation:

-   ✅ Stores the wallet address
-   ✅ Marks it as a MetaMask wallet (`x402_wallet_type: 'metamask'`)
-   ❌ Does NOT encrypt/store the private key (MetaMask manages this)

### Transaction Signing

For MetaMask wallets, transactions must be signed through MetaMask's interface:

```typescript
// Example for future transaction signing
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const tx = await signer.sendTransaction({...});
```

### Wallet Type Detection

You can detect wallet type:

```typescript
const walletType = localStorage.getItem("x402_wallet_type");
if (walletType === "metamask") {
	// Use MetaMask for signing
} else {
	// Use encrypted private key
}
```

## Error Handling

The implementation handles:

-   ✅ MetaMask not installed
-   ✅ User rejection (error code 4001)
-   ✅ No accounts found
-   ✅ Generic connection errors

## Next Steps

To fully support MetaMask wallets, you'll need to:

1. **Update transaction signing logic** to use MetaMask when `x402_wallet_type === 'metamask'`
2. **Add wallet type indicator** in the UI to show which wallet is connected
3. **Handle network switching** (Avalanche C-Chain)
4. **Add disconnect functionality** for MetaMask wallets

## Testing

1. Install MetaMask extension
2. Click "Continue with a wallet"
3. Click "MetaMask"
4. Approve connection in MetaMask popup
5. Verify address is stored and page reloads
6. Check that user is authenticated

## Future Enhancements

-   Add WalletConnect support
-   Add Zelf wallet support
-   Allow switching between wallets
-   Add network detection and switching
-   Show wallet balance for MetaMask wallets
