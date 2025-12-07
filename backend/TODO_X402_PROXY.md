# TODO: Implement x402 Proxy for Verifik API

## Objective

Enable the Smart Agent backend to act as an x402-gated proxy for all Verifik public endpoints. This allows valid requests (with payment) to be forwarded to `verifik.app`, while unpaid requests receive a 402 Payment Required invoice.

## 1. Backend Routes Pattern

-   [ ] Create a new route file: `src/routes/proxy.js`.
-   [ ] Define a "catch-all" route pattern: `router.all('/v2/(.*)', ...)` or `router.all(/^\/v2\/.*/, ...)` using Koa Router regex.
-   [ ] Register this new route in `src/index.js` to handle all `/v2/*` requests.

## 2. x402 Middleware Implementation

-   [ ] Create `src/middleware/x402.js`.
-   [ ] **Invoice Logic**:
    -   [ ] If no payment proof is present (Header `x-payment-tx` or `Authorization: L402 <token>`):
        -   [ ] Calculate price (default fixed price e.g. 0.01 AVAX).
        -   [ ] Generate an invoice (interacting with Payment Gateway/Smart Contract).
        -   [ ] Return HTTP 402 "Payment Required".
        -   [ ] Header: `WWW-Authenticate: L402 token="...", invoice="..."`.
        -   [ ] Body: `{ error: "Payment Required", invoice: "..." }`.
-   [ ] **Validation Logic**:
    -   [ ] If Payment Header (`x-payment-tx`) is present:
        -   [ ] Verify the transaction hash on Avalanche C-Chain (using `ethers` provider).
            -   [ ] Confirm Tx exists.
            -   [ ] Confirm Receiver is Agent Wallet.
            -   [ ] Confirm Amount >= Price.
            -   [ ] (Optional) Check simple replay protection (if we want to be strict).
        -   [ ] Start processing request (call `next()`).

## 3. Proxy Controller

-   [ ] Create `src/controllers/proxyController.js`.
-   [ ] Implement `handleRequest` method:
    -   [ ] Extract the path from `ctx.path` (e.g., `/v2/co/runt/vehiculo`).
    -   [ ] Construct the target URL: `https://verifik.app` + path.
    -   [ ] Forward the request using `axios`.
        -   [ ] Method: `ctx.method`.
        -   [ ] Headers:
            -   [ ] Inject `Authorization: Bearer <VERIFIK_SERVICE_TOKEN>` (Agent pays/auths with Verifik).
            -   [ ] Content-Type.
        -   [ ] Body: `ctx.request.body`.
    -   [ ] Receive upstream response.
    -   [ ] Forward response status, headers, and body to `ctx`.

## 4. Configuration

-   [ ] Update `.env` / `src/config/index.js` to include:
    -   [ ] `VERIFIK_API_BASE_URL` (default: `https://verifik.app`).
    -   [ ] `VERIFIK_SERVICE_TOKEN` (The agent's key).
    -   [ ] `X402_PRICE_DEFAULT` (e.g., in Wei/AVAX).

## 5. Tools Manifest Population (Crucial)

-   [ ] **Generate Manifest Script**:
    -   [ ] Create `scripts/generate-manifest.js`.
    -   [ ] Input: `/Users/miguel/verifik/verifik-backend/scripts/app-features-final.json`.
    -   [ ] Logic:
        -   [ ] Filter `isAvailable: true` and `deleted: false`.
        -   [ ] Map fields: `code` -> `id`, `name` -> `name`, `description` -> `description`.
        -   [ ] Map URL: `http://localhost:3060/` + `feature.url`.
        -   [ ] Map Dependencies -> JSON Schema `parameters`.
        -   [ ] Add `country` field to metadata.
    -   [ ] Output: `src/config/tools-manifest.json`.
    -   [ ] Run the script to populate the full list of tools.

## 6. Testing

-   [ ] **Unpaid Request**:
    -   [ ] `curl -v -X POST http://localhost:3060/v2/co/runt/vehiculo`
    -   [ ] Expect: 402 Payment Required.
-   [ ] **Paid Request**:
    -   [ ] `curl -v -X POST -H "x-payment-tx: <valid_hash>" http://localhost:3060/v2/co/runt/vehiculo`
    -   [ ] Expect: 200 OK + Data.
