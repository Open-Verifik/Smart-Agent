import {
  ethers_exports
} from "./chunk-WDYBDDAV.js";
import {
  SessionService,
  WalletEncryptionService
} from "./chunk-OVR3OJIF.js";
import {
  environment
} from "./chunk-32YYYLAD.js";
import {
  BehaviorSubject,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YTOBX75K.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// src/app/modules/chat/services/agent-wallet.service.ts
var AVALANCHE_CHAIN_ID = "0xa86a";
var AgentWalletService = class _AgentWalletService {
  constructor(_encryptionService) {
    this._encryptionService = _encryptionService;
    this.balanceSubject = new BehaviorSubject("0.00");
    this.balance$ = this.balanceSubject.asObservable();
    this.tokenBalanceSubject = new BehaviorSubject("0.00");
    this.tokenBalance$ = this.tokenBalanceSubject.asObservable();
    this.RPC_URL = environment.rpcUrl || "https://api.avax.network/ext/bc/C/rpc";
    this.VKA_CONTRACT_ADDRESS = environment.vkaContractAddress;
    this._sessionService = inject(SessionService);
    this.provider = new ethers_exports.JsonRpcProvider(this.RPC_URL);
    this.provider.pollingInterval = 36e5;
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (localStorage.getItem("x402_wallet_type") === "metamask") {
          if (accounts.length > 0) {
            localStorage.setItem("x402_agent_address", accounts[0]);
          }
          this._sessionService.safeReload();
        }
      });
    }
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // Polling Control
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Starts active polling (1.5s interval) for faster transaction confirmations.
   * Use when waiting for a transaction to be mined.
   */
  startActivePolling() {
    this.provider.pollingInterval = 1500;
  }
  /**
   * Pauses polling (1 hour interval) to reduce RPC calls when idle.
   * Call this after transaction confirmation or when not actively waiting.
   */
  pausePolling() {
    this.provider.pollingInterval = 36e5;
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // Wallet State
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Gets the current wallet address from local storage.
   * @returns The wallet address or empty string if not connected
   */
  getAddress() {
    return localStorage.getItem("x402_agent_address") || "";
  }
  /**
   * Fetches the native AVAX balance for the connected wallet.
   * @returns The balance formatted in AVAX (e.g., "1.5")
   */
  getBalance() {
    return __async(this, null, function* () {
      const address = this.getAddress();
      if (!address)
        return "0.00";
      const balance = yield this.provider.getBalance(address);
      return ethers_exports.formatEther(balance);
    });
  }
  /**
   * Fetches the ERC-20 token balance for the connected wallet.
   * @param tokenAddress - The token contract address (defaults to VKA)
   * @returns The token balance formatted with proper decimals
   */
  getTokenBalance() {
    return __async(this, arguments, function* (tokenAddress = this.VKA_CONTRACT_ADDRESS) {
      const address = this.getAddress();
      if (!address)
        return "0.00";
      try {
        const abi = [
          "function balanceOf(address) view returns (uint256)",
          "function decimals() view returns (uint8)"
        ];
        const contract = new ethers_exports.Contract(tokenAddress, abi, this.provider);
        const [balance, decimals] = yield Promise.all([
          contract.balanceOf(address),
          contract.decimals()
        ]);
        return ethers_exports.formatUnits(balance, decimals);
      } catch {
        return "0.00";
      }
    });
  }
  /**
   * Refreshes both AVAX and VKA token balances and updates the observable streams.
   * Call this after transactions to update the UI.
   */
  refreshBalance() {
    return __async(this, null, function* () {
      try {
        this.balanceSubject.next(yield this.getBalance());
        this.tokenBalanceSubject.next(yield this.getTokenBalance());
      } catch {
      }
    });
  }
  /**
   * Resets the wallet by clearing all encryption data and local storage.
   * Triggers a page reload to reset the application state.
   */
  resetWallet() {
    this._encryptionService.clearEncryptionData();
    localStorage.removeItem("x402_agent_address");
    localStorage.removeItem("x402_wallet_type");
    this._sessionService.safeReload();
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // Signer Management
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Gets the appropriate signer based on wallet type.
   * Supports encrypted agent wallets (passkey/PIN) and MetaMask.
   * @returns An ethers Signer instance for signing transactions
   * @throws Error if no valid wallet is connected or unlock fails
   */
  getSigner() {
    return __async(this, null, function* () {
      const walletType = localStorage.getItem("x402_wallet_type");
      let encryptionMethod = this._encryptionService.getEncryptionMethod();
      if (!encryptionMethod && this._encryptionService.isWalletEncrypted()) {
        encryptionMethod = localStorage.getItem("x402_credential_id") ? "passkey" : localStorage.getItem("x402_encryption_salt") ? "pin" : null;
      }
      if (encryptionMethod) {
        let privateKey = null;
        if (encryptionMethod === "passkey") {
          privateKey = yield this._encryptionService.decryptWithPasskeys();
        } else if (encryptionMethod === "pin") {
          const pin = prompt("Please enter your 6-digit PIN to sign the transaction:");
          if (pin)
            privateKey = yield this._encryptionService.decryptWithPIN(pin);
        }
        if (privateKey)
          return new ethers_exports.Wallet(privateKey, this.provider);
        throw new Error("Failed to unlock wallet");
      }
      if (walletType === "metamask" && window.ethereum) {
        yield this.switchToAvalancheMainnet();
        const provider = new ethers_exports.BrowserProvider(window.ethereum);
        yield provider.send("eth_requestAccounts", []);
        return yield provider.getSigner();
      }
      throw new Error("No valid wallet connected. Please sign in with your Agent Wallet or MetaMask.");
    });
  }
  /**
   * Checks if the current wallet type is MetaMask.
   * @returns True if using MetaMask, false otherwise
   */
  isMetaMaskAccount() {
    const type = localStorage.getItem("x402_wallet_type");
    return !!type && type.trim().toLowerCase() === "metamask";
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // Network Management
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Switches MetaMask to Avalanche C-Chain mainnet.
   * If the network is not configured, it will be added automatically.
   * @throws Error if user rejects the network switch
   */
  switchToAvalancheMainnet() {
    return __async(this, null, function* () {
      const ethereum = window.ethereum;
      if (!ethereum)
        return;
      try {
        const currentChainId = yield ethereum.request({ method: "eth_chainId" });
        if (currentChainId === AVALANCHE_CHAIN_ID)
          return;
        yield ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: AVALANCHE_CHAIN_ID }]
        });
      } catch (error) {
        if (error.code === 4902) {
          yield ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: AVALANCHE_CHAIN_ID,
                chainName: "Avalanche C-Chain",
                nativeCurrency: { name: "Avalanche", symbol: "AVAX", decimals: 18 },
                rpcUrls: [
                  environment.rpcUrl || "https://api.avax.network/ext/bc/C/rpc"
                ],
                blockExplorerUrls: ["https://snowtrace.io/"]
              }
            ]
          });
        } else if (error.code === 4001) {
          throw new Error("User rejected the network switch request");
        } else {
          throw error;
        }
      }
    });
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // Token Registration
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Manually triggers VKA token registration in MetaMask.
   * @param tokenAddress - Optional custom token address (defaults to VKA)
   */
  registerVkaToken(tokenAddress) {
    return __async(this, null, function* () {
      yield this.ensureVkaTokenMetadata(tokenAddress);
    });
  }
  /**
   * Ensures the VKA token is registered in MetaMask for proper display.
   * Fetches token metadata from the contract and prompts MetaMask to add it.
   * Registration is cached to avoid repeated prompts.
   * @param tokenAddress - The token contract address (defaults to VKA)
   */
  ensureVkaTokenMetadata() {
    return __async(this, arguments, function* (tokenAddress = this.VKA_CONTRACT_ADDRESS) {
      if (!this.isMetaMaskAccount())
        return;
      const address = tokenAddress || this.VKA_CONTRACT_ADDRESS;
      const flagKey = `vka_reg_${address.toLowerCase()}`;
      if (localStorage.getItem(flagKey) === "true")
        return;
      try {
        let symbol = environment.tokenTicker || "VKA";
        let decimals = 18;
        try {
          const abi = [
            "function symbol() view returns (string)",
            "function decimals() view returns (uint8)"
          ];
          const contract = new ethers_exports.Contract(address, abi, this.provider);
          [symbol, decimals] = yield Promise.all([
            contract["symbol"](),
            contract["decimals"]()
          ]);
        } catch {
        }
        const wasAdded = yield window.ethereum.request({
          method: "wallet_watchAsset",
          params: {
            type: "ERC20",
            options: {
              address,
              symbol,
              decimals,
              image: "https://verifik.app/vka-logo.png"
            }
          }
        });
        if (wasAdded)
          localStorage.setItem(flagKey, "true");
      } catch {
      }
    });
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // Transactions
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Sends a simple ETH/AVAX transaction.
   * @param to - Recipient address
   * @param amountEther - Amount in AVAX (e.g., "0.1")
   * @param data - Optional calldata (defaults to "0x")
   * @returns The transaction response
   */
  sendTransaction(to, amountEther, data = "0x") {
    return __async(this, null, function* () {
      const signer = yield this.getSigner();
      return signer.sendTransaction({ to, value: ethers_exports.parseEther(amountEther), data });
    });
  }
  /**
   * Pays for a service using native AVAX via the x402 payment contract.
   * @param contractAddress - The payment contract address
   * @param serviceId - Identifier for the service being paid for
   * @param requestId - Unique request identifier for tracking
   * @param amountEther - Payment amount in AVAX
   * @returns Transaction response and signer address
   */
  payForService(contractAddress, serviceId, requestId, amountEther) {
    return __async(this, null, function* () {
      const signer = yield this.getSigner();
      const signerAddress = yield signer.getAddress();
      const code = yield this.provider.getCode(contractAddress);
      if (code === "0x")
        contractAddress = environment.x402PaymentContract;
      const abi = ["function payForService(string serviceId, string requestId) public payable"];
      const contract = new ethers_exports.Contract(contractAddress, abi, signer);
      const args = [serviceId, requestId];
      const overrides = { value: ethers_exports.parseEther(amountEther) };
      const tx = this.isMetaMaskAccount() ? yield this._executeMetaMaskTransaction(contract, "payForService", args, overrides) : yield this._executeInternalTransaction(contract, "payForService", args, overrides, signerAddress);
      return { tx, signerAddress };
    });
  }
  /**
   * Pays for a service using VKA tokens (ERC-20 transfer).
   * Ensures token is registered in MetaMask before transaction for proper display.
   * @param recipientAddress - Address to receive the tokens
   * @param tokenAddress - The token contract address
   * @param amountUnits - Amount in token units (e.g., "0.2" for 0.2 VKA)
   * @returns Transaction response and signer address
   */
  payForServiceWithToken(recipientAddress, tokenAddress, amountUnits) {
    return __async(this, null, function* () {
      const signer = yield this.getSigner();
      const signerAddress = yield signer.getAddress();
      const abi = [
        "function transfer(address to, uint256 amount) public returns (bool)",
        "function decimals() view returns (uint8)"
      ];
      const contract = new ethers_exports.Contract(tokenAddress, abi, this.provider);
      const decimals = yield contract.decimals();
      const amount = ethers_exports.parseUnits(amountUnits, decimals);
      const data = contract.interface.encodeFunctionData("transfer", [recipientAddress, amount]);
      let tx;
      if (this.isMetaMaskAccount()) {
        yield this.ensureVkaTokenMetadata(tokenAddress);
        tx = yield this._executeMetaMaskRaw(tokenAddress, data, 0n);
      } else {
        const signerContract = new ethers_exports.Contract(tokenAddress, abi, signer);
        tx = yield this._executeInternalTransaction(signerContract, "transfer", [recipientAddress, amount], {}, signerAddress);
      }
      return { tx, signerAddress };
    });
  }
  /**
   * Submits feedback for an AI agent to the reputation registry contract.
   * @param agentTokenId - The agent's NFT token ID
   * @param rating - Rating from 1-5
   * @param tags - Optional array of feedback tags
   * @param comment - Optional feedback comment
   * @param paymentTxHash - Optional payment transaction hash as proof
   * @returns The transaction response
   * @throws Error if rating is not between 1-5
   */
  submitFeedback(_0, _1) {
    return __async(this, arguments, function* (agentTokenId, rating, tags = [], comment = "", paymentTxHash = null) {
      const signer = yield this.getSigner();
      if (rating < 1 || rating > 5)
        throw new Error("Rating must be between 1 and 5");
      const abi = [
        "function submitFeedback(uint256 agentTokenId, uint8 rating, string[] memory tags, string memory comment, bytes32 paymentProof) external returns (uint256)"
      ];
      const contract = new ethers_exports.Contract(environment.reputationRegistryContract, abi, signer);
      const paymentProof = paymentTxHash && ethers_exports.isHexString(paymentTxHash) ? paymentTxHash : ethers_exports.ZeroHash;
      const args = [agentTokenId, rating, tags, comment, paymentProof];
      return this.isMetaMaskAccount() ? yield this._executeMetaMaskTransaction(contract, "submitFeedback", args) : yield this._executeInternalTransaction(contract, "submitFeedback", args, {}, yield signer.getAddress());
    });
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // MetaMask Transaction Execution
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Executes a raw transaction via MetaMask using direct RPC calls.
   * Bypasses ethers.js transaction management to ensure the 'from' address
   * exactly matches MetaMask's active account (fixes "invalid sender" errors).
   * @param to - Target contract or recipient address
   * @param data - Encoded transaction data
   * @param value - Native currency value to send (0 for token transfers)
   * @returns The transaction response
   */
  _executeMetaMaskRaw(to, data, value = 0n) {
    return __async(this, null, function* () {
      const ethereum = window.ethereum;
      if (!ethereum)
        throw new Error("MetaMask not found");
      try {
        yield this.switchToAvalancheMainnet();
        yield this._delay(100);
        const accounts = yield ethereum.request({ method: "eth_requestAccounts" });
        const activeAccount = accounts[0];
        if (!activeAccount)
          throw new Error("No active account in MetaMask");
        const chainId = yield ethereum.request({ method: "eth_chainId" });
        if (chainId !== AVALANCHE_CHAIN_ID) {
          yield this.switchToAvalancheMainnet();
          yield this._delay(200);
        }
        const storedAddress = this.getAddress();
        if (activeAccount.toLowerCase() !== storedAddress.toLowerCase()) {
          localStorage.setItem("x402_agent_address", activeAccount);
        }
        const txParams = { from: activeAccount, to, data };
        if (value > 0n)
          txParams.value = ethers_exports.toBeHex(value);
        const txHash = yield ethereum.request({
          method: "eth_sendTransaction",
          params: [txParams]
        });
        yield this._delay(500);
        const txResponse = yield this.provider.getTransaction(txHash);
        return txResponse || {
          hash: txHash,
          wait: () => __async(this, null, function* () {
            return this.provider.waitForTransaction(txHash);
          })
        };
      } catch (error) {
        if (error.code === 4001)
          throw new Error("Transaction was rejected by user");
        if (error.message?.includes("invalid sender")) {
          throw new Error("Invalid sender: Please ensure MetaMask is connected to Avalanche. Try reconnecting your wallet.");
        }
        if (error.message?.includes("insufficient funds")) {
          throw new Error("Insufficient funds: Make sure you have enough VKA tokens and AVAX for gas.");
        }
        throw error;
      }
    });
  }
  /**
   * Executes a contract method via MetaMask by encoding the call and using raw RPC.
   * @param contract - The ethers Contract instance
   * @param methodName - Name of the contract method to call
   * @param args - Arguments for the method
   * @param overrides - Optional transaction overrides (value, gas, etc.)
   * @returns The transaction response
   */
  _executeMetaMaskTransaction(_0, _1, _2) {
    return __async(this, arguments, function* (contract, methodName, args, overrides = {}) {
      const data = contract.interface.encodeFunctionData(methodName, args);
      const value = overrides.value || 0n;
      return this._executeMetaMaskRaw(contract.target, data, value);
    });
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // Internal Wallet Transaction Execution
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Executes a contract method using the internal encrypted wallet.
   * Includes gas optimization and priority fee configuration.
   * @param contract - The ethers Contract instance
   * @param methodName - Name of the contract method to call
   * @param args - Arguments for the method
   * @param overrides - Optional transaction overrides
   * @param signerAddress - The signer's address for gas estimation
   * @returns The transaction response
   */
  _executeInternalTransaction(_0, _1, _2) {
    return __async(this, arguments, function* (contract, methodName, args, overrides = {}, signerAddress) {
      const txOptions = yield this._prepareGasOptimizedTransaction(contract, methodName, args, overrides, signerAddress);
      return yield contract[methodName](...args, txOptions);
    });
  }
  /**
   * Prepares transaction options with optimized gas settings.
   * @param contract - The contract instance
   * @param methodName - Method to call
   * @param args - Method arguments
   * @param baseOptions - Base transaction options
   * @param signerAddress - Signer address for estimation
   * @returns Complete transaction options with gas settings
   */
  _prepareGasOptimizedTransaction(contract, methodName, args, baseOptions, signerAddress) {
    return __async(this, null, function* () {
      const gasLimit = yield this._estimateGasWithBuffer(contract, methodName, args, baseOptions, signerAddress);
      return this._prepareInternalWalletOptions(__spreadProps(__spreadValues({}, baseOptions), { gasLimit }), signerAddress);
    });
  }
  /**
   * Estimates gas for a transaction with a 20% buffer for safety.
   * @param contract - The contract instance
   * @param methodName - Method to estimate
   * @param args - Method arguments
   * @param baseOptions - Base options for estimation
   * @param signerAddress - Address to estimate from
   * @returns Gas limit with 20% buffer, or default 300k on failure
   */
  _estimateGasWithBuffer(contract, methodName, args, baseOptions, signerAddress) {
    return __async(this, null, function* () {
      try {
        const method = contract[methodName];
        const estimated = yield method.estimateGas(...args, __spreadProps(__spreadValues({}, baseOptions), {
          from: signerAddress
        }));
        return estimated * 120n / 100n;
      } catch {
        return 300000n;
      }
    });
  }
  /**
   * Adds EIP-1559 priority fees to transaction options for faster inclusion.
   * @param txOptions - Transaction options to enhance
   * @param signerAddress - The signer's address
   * @returns Enhanced transaction options with fee configuration
   */
  _prepareInternalWalletOptions(txOptions, signerAddress) {
    return __async(this, null, function* () {
      txOptions.from = signerAddress;
      const feeData = yield this.provider.getFeeData();
      const tip = ethers_exports.parseUnits(environment.priorityFeeTipGwei || "5", "gwei");
      if (feeData.maxFeePerGas && feeData.maxPriorityFeePerGas) {
        txOptions.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas + tip;
        txOptions.maxFeePerGas = feeData.maxFeePerGas * 125n / 100n + tip;
      } else if (feeData.gasPrice) {
        txOptions.gasPrice = feeData.gasPrice * 135n / 100n;
      }
      return txOptions;
    });
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // Query Methods
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Fetches payment history from the x402 payment contract.
   * Queries PaymentReceived events for the current wallet.
   * @param contractAddress - The payment contract to query (defaults to x402)
   * @returns Array of payment records sorted newest first
   */
  getPaymentHistory() {
    return __async(this, arguments, function* (contractAddress = environment.x402PaymentContract) {
      const walletAddress = this.getAddress();
      if (!walletAddress)
        return [];
      const abi = [
        "event PaymentReceived(address indexed payer, string serviceId, string requestId, uint256 amount)"
      ];
      const contract = new ethers_exports.Contract(contractAddress, abi, this.provider);
      const filter = contract.filters.PaymentReceived(walletAddress);
      const currentBlock = yield this.provider.getBlockNumber();
      const fromBlock = Math.max(0, currentBlock - 2e6);
      const logs = yield contract.queryFilter(filter, fromBlock);
      return Promise.all(logs.slice().reverse().map((log) => __async(this, null, function* () {
        if ("args" in log) {
          const block = yield log.getBlock();
          return {
            transactionHash: log.transactionHash,
            blockNumber: log.blockNumber,
            timestamp: (block?.timestamp || 0) * 1e3,
            serviceId: log.args[1],
            // serviceId
            requestId: log.args[2],
            // requestId
            amount: ethers_exports.formatEther(log.args[3])
            // amount
          };
        }
        return null;
      }))).then((results) => results.filter((r) => r !== null));
    });
  }
  /**
   * Fetches detailed information about a specific transaction.
   * @param txHash - The transaction hash to query
   * @returns Transaction details or null if not found
   */
  getTransactionDetails(txHash) {
    return __async(this, null, function* () {
      try {
        const tx = yield this.provider.getTransaction(txHash);
        if (!tx)
          return null;
        const [receipt, block] = yield Promise.all([
          this.provider.getTransactionReceipt(txHash),
          this.provider.getBlock(tx.blockNumber)
        ]);
        if (!receipt || !block)
          return null;
        return {
          hash: tx.hash,
          from: tx.from,
          to: tx.to,
          value: ethers_exports.formatEther(tx.value),
          gasUsed: receipt.gasUsed.toString(),
          status: receipt.status === 1 ? "Success" : "Failed",
          timestamp: block.timestamp * 1e3,
          blockNumber: tx.blockNumber
        };
      } catch {
        return null;
      }
    });
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // Utilities
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Simple promise-based delay utility.
   * @param ms - Milliseconds to wait
   */
  _delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  static {
    this.\u0275fac = function AgentWalletService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentWalletService)(\u0275\u0275inject(WalletEncryptionService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AgentWalletService, factory: _AgentWalletService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentWalletService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: WalletEncryptionService }], null);
})();

export {
  AgentWalletService
};
//# sourceMappingURL=chunk-LH4KI4FV.js.map
