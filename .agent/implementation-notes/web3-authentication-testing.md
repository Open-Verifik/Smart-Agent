# Testing Web3 Authentication

## Test Scenarios

### Scenario 1: Fresh User - Web3 Authentication Only

**Steps**:

1. Clear all localStorage (or use incognito mode)
2. Navigate to the Smart-Agent app
3. Verify "Log in" button is displayed in the header
4. Click "Log in" button
5. Select "Connect Wallet" option in the auth modal
6. Click "Create Agent Wallet" button
7. Verify alert shows wallet address and confirmation message
8. Click OK on the alert
9. Verify modal closes and page reloads
10. Verify authenticated UI is displayed:
    - User menu button shows "Agent Wallet" name
    - Truncated address shown as email
    - Credits shows 0.00
    - AVAX balance displayed (should be 0.000000)

**Expected localStorage**:

```javascript
{
  "x402_agent_address": "0x...",
  "x402_agent_pk": "0x..."
}
```

**Expected UI**:

-   ✅ User menu button visible
-   ✅ "Log in" button hidden
-   ✅ User dropdown shows wallet info
-   ✅ Sign out button functional

---

### Scenario 2: Web2 Authentication Only

**Steps**:

1. Clear all localStorage
2. Navigate to the Smart-Agent app
3. Click "Log in" button
4. Select email or phone authentication
5. Complete OTP verification
6. Verify authenticated UI with actual user data

**Expected localStorage**:

```javascript
{
  "accessToken": "eyJ...",
  "verifik_account": "{...}"
}
```

**Expected UI**:

-   ✅ User menu shows actual user name
-   ✅ User menu shows actual email
-   ✅ Credits balance displayed
-   ✅ No agent wallet section (unless previously created)

---

### Scenario 3: Hybrid Authentication (Web2 + Web3)

**Steps**:

1. Start with Web2 authentication (from Scenario 2)
2. Open auth modal again
3. Create an agent wallet
4. Verify both credentials exist in localStorage
5. Verify UI shows:
    - Web2 user info (name, email, credits)
    - AVAX balance in header button
    - Agent wallet section in dropdown menu

**Expected localStorage**:

```javascript
{
  "accessToken": "eyJ...",
  "verifik_account": "{...}",
  "x402_agent_address": "0x...",
  "x402_agent_pk": "0x..."
}
```

**Expected UI**:

-   ✅ User menu shows Web2 user name (not "Agent Wallet")
-   ✅ User menu shows Web2 email
-   ✅ Credits balance displayed
-   ✅ AVAX balance displayed in header
-   ✅ Agent wallet section in dropdown with full address

---

### Scenario 4: Sign Out - Web3 Only

**Steps**:

1. Start with Web3 authentication only (Scenario 1)
2. Click user menu button
3. Click "Sign Out" button
4. Verify page reloads
5. Verify "Log in" button is displayed
6. Check localStorage - should be empty

**Expected Result**:

-   ✅ All credentials cleared from localStorage
-   ✅ "Log in" button visible
-   ✅ User menu hidden
-   ✅ Clean unauthenticated state

---

### Scenario 5: Sign Out - Hybrid

**Steps**:

1. Start with hybrid authentication (Scenario 3)
2. Click user menu button
3. Click "Sign Out" button
4. Verify page reloads
5. Verify "Log in" button is displayed
6. Check localStorage - should be empty

**Expected Result**:

-   ✅ Both Web2 and Web3 credentials cleared
-   ✅ "Log in" button visible
-   ✅ User menu hidden
-   ✅ Clean unauthenticated state

---

### Scenario 6: Page Reload Persistence - Web3

**Steps**:

1. Authenticate with Web3 (Scenario 1)
2. Reload the page (F5 or Cmd+R)
3. Verify authenticated state persists
4. Verify wallet info still displayed

**Expected Result**:

-   ✅ User remains authenticated after reload
-   ✅ Wallet info displayed correctly
-   ✅ AVAX balance fetched and displayed

---

### Scenario 7: Page Reload Persistence - Hybrid

**Steps**:

1. Authenticate with hybrid (Scenario 3)
2. Reload the page
3. Verify both Web2 and Web3 info persist

**Expected Result**:

-   ✅ User remains authenticated after reload
-   ✅ Web2 user info displayed
-   ✅ Agent wallet info displayed
-   ✅ Both balances shown

---

### Scenario 8: Dual-Login - Web3 to Hybrid (NEW!)

**Steps**:

1. Clear all localStorage
2. Authenticate with Web3 only (Scenario 1)
3. Verify "Agent Wallet" is displayed in user menu
4. Click user menu button to open dropdown
5. **Verify "Connect Web2 Account" button is visible** (indigo/blue button)
6. Click "Connect Web2 Account" button
7. Auth modal opens
8. Complete email or phone authentication with OTP
9. Verify page reloads
10. Verify UI now shows hybrid authentication:
    - User menu shows Web2 user name (NOT "Agent Wallet")
    - User menu shows Web2 email (NOT truncated address)
    - Credits balance from Web2 account
    - AVAX balance from agent wallet
11. Open user menu dropdown
12. **Verify "Connect Web2 Account" button is now HIDDEN**
13. Verify agent wallet section is visible with full address

**Expected localStorage (before connecting Web2)**:

```javascript
{
  "x402_agent_address": "0x...",
  "x402_agent_pk": "0x..."
}
```

**Expected localStorage (after connecting Web2)**:

```javascript
{
  "accessToken": "eyJ...",
  "verifik_account": "{...}",
  "x402_agent_address": "0x...",  // Preserved!
  "x402_agent_pk": "0x..."        // Preserved!
}
```

**Expected UI Changes**:

-   ✅ "Connect Web2 Account" button visible when Web3-only
-   ✅ "Connect Web2 Account" button hidden after linking Web2
-   ✅ User name changes from "Agent Wallet" to actual name
-   ✅ Email changes from truncated address to actual email
-   ✅ Credits change from 0.00 to actual balance
-   ✅ AVAX balance remains visible
-   ✅ Agent wallet section remains in dropdown
-   ✅ Both credentials preserved in localStorage

---

## Manual Testing Checklist

### Authentication State Detection

-   [ ] Web3-only auth shows "Agent Wallet" name
-   [ ] Web3-only auth shows truncated address as email
-   [ ] Web3-only auth shows 0 credits
-   [ ] Web3-only auth shows AVAX balance
-   [ ] Web2-only auth shows actual user data
-   [ ] Hybrid auth prioritizes Web2 user data
-   [ ] Hybrid auth shows both credits and AVAX

### UI Components

-   [ ] Login button hidden when authenticated
-   [ ] User menu button visible when authenticated
-   [ ] User menu dropdown opens correctly
-   [ ] Agent wallet section appears when wallet exists
-   [ ] Copy wallet address button works
-   [ ] Sign out button works
-   [ ] **"Connect Web2 Account" button visible when Web3-only**
-   [ ] **"Connect Web2 Account" button hidden when hybrid or Web2-only**
-   [ ] **"Connect Web2 Account" button opens auth modal**
-   [ ] **Dual-login preserves wallet credentials after Web2 connection**

### localStorage Management

-   [ ] Web3 credentials stored correctly
-   [ ] Web2 credentials stored correctly
-   [ ] Sign out clears all credentials
-   [ ] Page reload preserves authentication

### Edge Cases

-   [ ] Empty localStorage shows login button
-   [ ] Corrupted localStorage handled gracefully
-   [ ] Missing x402_agent_pk (but address exists) doesn't authenticate
-   [ ] Missing x402_agent_address (but pk exists) doesn't authenticate
-   [ ] Both Web3 credentials required for authentication

---

## Browser Console Checks

### Check Authentication State

```javascript
// Check Web2 credentials
console.log("Access Token:", localStorage.getItem("accessToken"));
console.log("Verifik Account:", JSON.parse(localStorage.getItem("verifik_account") || "null"));

// Check Web3 credentials
console.log("Agent Address:", localStorage.getItem("x402_agent_address"));
console.log("Agent PK:", localStorage.getItem("x402_agent_pk"));
```

### Clear All Credentials

```javascript
localStorage.removeItem("accessToken");
localStorage.removeItem("verifik_account");
localStorage.removeItem("x402_agent_address");
localStorage.removeItem("x402_agent_pk");
location.reload();
```

### Manually Set Web3 Credentials (for testing)

```javascript
// WARNING: Use test wallet only!
localStorage.setItem("x402_agent_address", "0x1234567890123456789012345678901234567890");
localStorage.setItem("x402_agent_pk", "0xabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcd");
location.reload();
```

---

## Known Limitations

1. **Private Key Storage**: Currently stored in plain text in localStorage

    - Security risk if device is compromised
    - Consider encryption in future iterations

2. **No Wallet Import**: Users can only create new wallets

    - Cannot import existing wallets
    - Cannot connect to MetaMask or other providers

3. **Single Wallet**: Only one agent wallet supported per browser

    - No multi-wallet management
    - Creating new wallet overwrites existing one

4. **No Signature Verification**: Wallet ownership not verified on-chain

    - Trust-based authentication
    - Consider adding signature challenges

5. **Credits Isolation**: Web2 credits and Web3 wallet are separate
    - No bridge between the two
    - Consider adding credit transfer functionality
