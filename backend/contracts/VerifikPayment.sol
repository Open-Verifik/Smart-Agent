// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title VerifikPayment
 * @dev Simple contract to accept payments for Verifik services (x402 style)
 * Supports AVAX and ERC-20 (VKA) payments and withdrawals.
 */
contract VerifikPayment {
    address public owner;

    event PaymentReceived(address indexed payer, string serviceId, string requestId, uint256 amount);
    event Withdrawal(address indexed owner, uint256 amount);
    event ERC20Withdrawal(address indexed owner, address indexed token, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    /**
     * @dev Pay for a specific service request (AVAX)
     * @param serviceId The ID of the service being paid for (e.g., "cedula-validation")
     * @param requestId The unique request ID from the client/server
     */
    function payForService(string memory serviceId, string memory requestId) public payable {
        require(msg.value > 0, "Payment amount must be greater than 0");
        emit PaymentReceived(msg.sender, serviceId, requestId, msg.value);
    }

    // fallback to receive AVAX
    receive() external payable {}

    /**
     * @dev Withdraw all AVAX funds to the owner's address
     */
    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");

        (bool sent, ) = owner.call{value: balance}("");
        require(sent, "Failed to send Ether");

        emit Withdrawal(owner, balance);
    }

    /**
     * @dev Withdraw ERC-20 tokens (e.g. VKA)
     * @param tokenAddress The contract address of the ERC-20 token
     */
    function withdrawERC20(address tokenAddress) public onlyOwner {
        IERC20 token = IERC20(tokenAddress);
        uint256 balance = token.balanceOf(address(this));
        require(balance > 0, "No token funds to withdraw");

        bool sent = token.transfer(owner, balance);
        require(sent, "Failed to transfer tokens");

        emit ERC20Withdrawal(owner, tokenAddress, balance);
    }

    /**
     * @dev Check balance of the contract (AVAX)
     */
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}
