// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable2Step.sol";

/**
 * @title VerifikPayment
 * @dev Secure payment contract for Verifik services (x402 style)
 * @notice Fixed version addressing security vulnerabilities
 */
contract VerifikPayment is ReentrancyGuard, Ownable2Step {
    event PaymentReceived(
        address indexed payer,
        string serviceId,
        string requestId,
        uint256 amount
    );
    event Withdrawal(address indexed owner, uint256 amount);

    constructor() Ownable(msg.sender) {}

    /**
     * @dev Pay for a specific service request
     * @param serviceId The ID of the service being paid for (e.g., "cedula-validation")
     * @param requestId The unique request ID from the client/server
     */
    function payForService(
        string memory serviceId,
        string memory requestId
    ) public payable {
        require(msg.value > 0, "Payment amount must be greater than 0");
        require(bytes(serviceId).length > 0, "Service ID cannot be empty");
        require(bytes(requestId).length > 0, "Request ID cannot be empty");

        emit PaymentReceived(msg.sender, serviceId, requestId, msg.value);
    }

    /**
     * @dev Withdraw all funds to the owner's address
     * @notice Uses ReentrancyGuard and Checks-Effects-Interactions pattern
     */
    function withdraw() public onlyOwner nonReentrant {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");

        // Emit event before transfer (Checks-Effects-Interactions)
        emit Withdrawal(owner(), balance);

        // Transfer funds
        (bool sent, ) = owner().call{value: balance}("");
        require(sent, "Failed to send Ether");
    }

    /**
     * @dev Withdraw specific amount to a specified address
     * @param to Recipient address
     * @param amount Amount to withdraw
     */
    function withdrawTo(
        address payable to,
        uint256 amount
    ) public onlyOwner nonReentrant {
        require(to != address(0), "Invalid recipient address");
        require(amount > 0, "Amount must be greater than 0");
        require(amount <= address(this).balance, "Insufficient balance");

        emit Withdrawal(to, amount);

        (bool sent, ) = to.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }

    /**
     * @dev Check balance of the contract
     */
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    /**
     * @dev Fallback function to receive Ether
     */
    receive() external payable {
        emit PaymentReceived(msg.sender, "direct", "", msg.value);
    }
}
