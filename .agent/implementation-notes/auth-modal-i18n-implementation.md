# Auth Modal i18n Implementation Task

## Status

✅ All translation keys added to: en.json, es.json, pt.json, ja.json, ko.json, zh.json
❌ HTML template still uses hardcoded English strings

## Next Step: Update HTML Template

The `auth-modal.component.html` file needs to be updated to use the `transloco` pipe for all text strings.

### Example Replacements Needed:

#### Header

```html
<!-- BEFORE -->
<h2>{{ state() === 'WALLET_ENCRYPT_CHOICE' || state() === 'WALLET_ENCRYPT_PIN' ? 'Secure Your Wallet' : 'Log in' }}</h2>

<!-- AFTER -->
<h2>
	{{ (state() === 'WALLET_ENCRYPT_CHOICE' || state() === 'WALLET_ENCRYPT_PIN' ? 'authModal.header.secureWallet' : 'authModal.header.login') |
	transloco }}
</h2>
```

#### Choice Screen Buttons

```html
<!-- BEFORE -->
<span>Continue with Email</span>

<!-- AFTER -->
<span>{{ 'authModal.choice.continueEmail' | transloco }}</span>
```

#### Info Messages (with HTML)

```html
<!-- BEFORE -->
<p>You must have an existing <strong>Verifik account</strong> to receive the code.</p>

<!-- AFTER -->
<p [innerHTML]="'authModal.emailInput.infoMessage' | transloco"></p>
```

#### Dynamic Messages with Parameters

```html
<!-- BEFORE -->
<p>Please check {{ email() }} for a message and enter your code below.</p>

<!-- AFTER -->
<p>{{ 'authModal.otpVerify.emailMessage' | transloco: { email: email() } }}</p>
```

## All Strings to Replace:

### CHOICE State

-   "Continue with Email" → `authModal.choice.continueEmail`
-   "Continue with SMS" → `authModal.choice.continueSMS`
-   "Continue with a wallet" → `authModal.choice.continueWallet`
-   "Or" → `authModal.choice.or`
-   "Don't have an account?" → `authModal.choice.noAccount`
-   "Sign up" → `authModal.choice.signUp`

### Wallet Connected

-   "Wallet Connected" → `authModal.walletConnected.title`

### EMAIL_INPUT State

-   Info message → `authModal.emailInput.infoMessage` (use [innerHTML])
-   "name@example.com" → `authModal.emailInput.placeholder`
-   "Continue" → `authModal.emailInput.continue`
-   "Back" → `authModal.emailInput.back`

### PHONE_INPUT State

-   Info message → `authModal.phoneInput.infoMessage` (use [innerHTML])
-   "Select" → `authModal.phoneInput.selectCountry`
-   "Search country..." → `authModal.phoneInput.searchCountry`
-   "No countries found" → `authModal.phoneInput.noCountries`
-   "201 555 0123" → `authModal.phoneInput.phonePlaceholder`
-   "Continue" → `authModal.phoneInput.continue`
-   "Back" → `authModal.phoneInput.back`

### OTP_VERIFY State

-   "Enter confirmation code" → `authModal.otpVerify.title`
-   Email message → `authModal.otpVerify.emailMessage` (with {{email}} param)
-   Phone message → `authModal.otpVerify.phoneMessage` (with {{phone}} param)
-   "Verify" → `authModal.otpVerify.verify`
-   "Back" → `authModal.otpVerify.back`

### WALLET_CONNECT State

-   "Connect Wallet" → `authModal.walletConnect.title`
-   "Connect your wallet..." → `authModal.walletConnect.subtitle`
-   "Zelf" → `authModal.walletConnect.zelf`
-   "MetaMask" → `authModal.walletConnect.metamask`
-   "WalletConnect" → `authModal.walletConnect.walletConnect`
-   "Create Agent Wallet (x402)" → `authModal.walletConnect.createAgent`
-   "Back" → `authModal.walletConnect.back`

### WALLET_ENCRYPT_CHOICE State

-   Instruction text → `authModal.walletEncrypt.instruction` (use [innerHTML])
-   "Create Passkey" → `authModal.walletEncrypt.createPasskey`
-   "Use 6-Digit PIN" → `authModal.walletEncrypt.usePIN`
-   "Passkeys are not supported..." → `authModal.walletEncrypt.notSupported`

### WALLET_ENCRYPT_PIN State

-   "Set Your PIN" → `authModal.pinSetup.title`
-   Subtitle → `authModal.pinSetup.subtitle`
-   Warning → `authModal.pinSetup.warning` (use [innerHTML])
-   "Encrypt Wallet" → `authModal.pinSetup.encryptWallet`
-   "Back" → `authModal.pinSetup.back`

### Footer

-   "Protected by Verifik" → `authModal.footer.protectedBy`

## Implementation Notes:

1. Use `| transloco` pipe for simple strings
2. Use `[innerHTML]="'key' | transloco"` for strings with HTML tags
3. Use `| transloco: { param: value() }` for parameterized strings
4. Make sure to import TranslocoModule if not already imported
