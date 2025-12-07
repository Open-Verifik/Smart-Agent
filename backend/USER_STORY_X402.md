# User Story: Premium Verifik Agent Interaction (x402 Flow)

## Actors

1.  **User**: Interacts with the Chat Interface. Possesses a crypto wallet (e.g., Core, Metamask) on Avalanche.
2.  **Smart Agent (AI)**: The LLM powering the conversation. It has access to a **Comprehensive Tools Manifest** (derived from the Verifik App Features DB), meaning it knows exactly which services are available for which country (e.g., "Colombia Vehicle Lookup", "US Business Search").
3.  **Smart Agent Backend (Local Proxy)**: The new logic running on `localhost:3060` that intercepts tool calls.
4.  **Verifik API (Web2 Source)**: The upstream provider of data (`verifik.app`), protected by traditional API Keys.

## Scenario: Colombian Vehicle Plate Lookup

The user wants to verify a vehicle license plate "ABC-123".

## Step-by-Step Flow

### 1. Intent & Tool Identification

**User**: Types _"Check vehicle plate ABC-123"_ (or _"Check this Colombian plate"_).
**Agent**:

-   Parses the request.
-   Consults its **Knowledge Base / Tools Manifest**:
    -   See's availability of `vehicle-lookup-co` path `/v2/co/runt/vehiculo`.
    -   Metadata: _"Country: Colombia"_, _"Description: Official RUNT Vehicle Registry"_.
-   Agent confirms explicitly with user if ambiguous: _"I see you want to check a vehicle. Based on the format ABC-123, this looks like a Colombian plate. I will use the **Colombia RUNT Vehicle Service**."_
-   **Manifest Config**: The tool's URL is configured to point to the local proxy: `http://localhost:3060/v2/co/runt/vehiculo`.

### 2. Initial Attempt (Unpaid)

**Agent**: Attempts to execute the tool _without_ payment.

-   **Request**: `POST http://localhost:3060/v2/co/runt/vehiculo` with body `{ plate: "ABC123" }`.
-   **Proxy (Middleware)**: Intercepts the request. Checks for `x-payment-tx` header.
    -   _Result_: Header is missing.
-   **Proxy (Response)**: Returns HTTP `402 Payment Required`.
    -   _Body_: `{ error: "Payment Required", price: "0.1 AVAX", wallet: "0xAgentWalletAddress..." }`

### 3. Payment Prompt

**Agent**: Receives the 402 error. Parses the invoice details.
**Agent Response**: Responds to the User: _"Accessing the official **Colombia RUNT** database costs **0.1 AVAX**. Please confirm payment to proceed with the verification."_
**Frontend**: Displays a "Pay 0.1 AVAX" button or UI element.

### 4. User Payment

**User**: Clicks "Pay". Signs the transaction in their wallet.

-   **Blockchain**: Transaction `0xTxHash123` is confirmed on Avalanche C-Chain, transferring 0.1 AVAX to the Agent's Wallet.
    **Frontend**: Captures the transaction hash `0xTxHash123`.

### 5. Retry with Proof (The x402 Handshake)

**Frontend**: Automatically sends the `0xTxHash123` back to the Agent Chat Backend.
**Agent**: Retries the tool execution, this time **with proof**.

-   **Request**: `POST http://localhost:3060/v2/co/runt/vehiculo`
    -   **Headers**: `x-payment-tx: 0xTxHash123`
    -   **Body**: `{ plate: "ABC123" }`

### 6. Proxy Validation & Forwarding

**Proxy (Middleware)**: Intercepts the request. Checks `x-payment-tx`.

-   **Validation**: Connects to Avalanche RPC. - Verifies `0xTxHash123` exists. - Verifies recipient is the Agent's Wallet. - Verifies amount >= Required Price. - _Result_: **Valid**.
    **Proxy (Controller)**: Proxies the request to the real source.
-   **Upstream Request**: `POST https://verifik.app/v2/co/runt/vehiculo`
    -   **Injection**: Adds `Authorization: Bearer <AGENT_VERIFIK_KEY>` (The Agent pays/authenticates with the upstream Web2 provider).
    -   **Body**: Forwards original body.

### 7. Data Retrieval & Response

**Verifik API**: Processes the request and returns the vehicle data JSON.
**Proxy**: Forwards the JSON response back to the Agent.
**Agent**: Receives the data (HTTP 200).

### 8. Mandadory Proof Recording (ERC8004)

**Agent**: (Mandatory Step) The Agent invokes the `recordValidationProof` function.

-   **Blockchain**: Records the input/output hash and the validity of the tool execution on the **ERC8004 Validation Registry** contract on Avalanche.
-   **Purpose**: Validates that the agent performed the task correctly, building its on-chain reputation.

**Agent Response**: Summarizes the data for the User: _"Vehicle ABC-123 is a registered Mazda 3, Color Red. (Validation Proof Recorded on Chain)"_

---

**Key Takeaway**: The Smart Agent Backend acts as a monetization gateway, ensuring every access to premium data (like Colombian Vehicle Records) is paid for via x402 and validated on-chain via ERC8004.
