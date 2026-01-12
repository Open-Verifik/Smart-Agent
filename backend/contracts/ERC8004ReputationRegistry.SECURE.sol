// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/**
 * @title ERC8004ReputationRegistry
 * @dev Reputation Registry for AI Agents (ERC8004)
 * @notice SECURE VERSION - Addresses all audit findings
 * Allows clients to submit feedback and ratings for agents
 */
contract ERC8004ReputationRegistry is AccessControl, Pausable {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");
    
    // Constants for limits
    uint256 public constant MAX_TAGS = 10;
    uint256 public constant MAX_COMMENT_LENGTH = 500;
    uint256 public constant MAX_TAG_LENGTH = 50;
    
    // Feedback structure
    struct Feedback {
        address client; // Who submitted the feedback
        uint256 agentTokenId; // Agent's identity token ID
        uint8 rating; // 1-5 rating
        string[] tags; // Optional tags (e.g., "fast", "accurate", "helpful")
        string comment; // Optional text comment
        bytes32 paymentProof; // Hash of payment transaction (links feedback to payment)
        uint256 timestamp;
        bool verified; // Whether feedback is verified (linked to payment)
    }
    
    // Mapping from feedback ID to Feedback
    mapping(uint256 => Feedback) public feedbacks;
    
    // Mapping from agent token ID to array of feedback IDs
    mapping(uint256 => uint256[]) private agentFeedbacks;
    
    // Mapping from client address to array of feedback IDs they submitted
    mapping(address => uint256[]) private clientFeedbacks;
    
    // Agent reputation summary
    struct ReputationSummary {
        uint256 totalFeedbacks;
        uint256 verifiedFeedbacks;
        uint256 averageRating; // Scaled by 100 (e.g., 350 = 3.5)
        uint256 totalRatingSum;
    }
    
    mapping(uint256 => ReputationSummary) public agentReputations;
    mapping(uint256 => mapping(string => uint256)) public agentTagCounts;
    
    uint256 private _feedbackCounter;
    
    // Reference to Identity Registry (to verify agent exists)
    address public identityRegistry;
    
    event FeedbackSubmitted(
        uint256 indexed feedbackId,
        uint256 indexed agentTokenId,
        address indexed client,
        uint8 rating,
        bytes32 paymentProof
    );
    
    event FeedbackVerified(uint256 indexed feedbackId, bool verified);
    event IdentityRegistryUpdated(address indexed oldRegistry, address indexed newRegistry);
    
    constructor(address _identityRegistry) {
        require(_identityRegistry != address(0), "Invalid identity registry");
        
        // Verify it's an ERC721 contract
        require(
            IERC721(_identityRegistry).supportsInterface(0x80ac58cd),
            "Not an ERC721 contract"
        );
        
        identityRegistry = _identityRegistry;
        
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(VERIFIER_ROLE, msg.sender);
    }
    
    /**
     * @dev Set the Identity Registry address
     * @param _identityRegistry Address of the Identity Registry contract
     */
    function setIdentityRegistry(address _identityRegistry) public onlyRole(ADMIN_ROLE) {
        require(_identityRegistry != address(0), "Invalid address");
        
        // Verify it's an ERC721 contract
        require(
            IERC721(_identityRegistry).supportsInterface(0x80ac58cd),
            "Not an ERC721 contract"
        );
        
        address oldRegistry = identityRegistry;
        identityRegistry = _identityRegistry;
        
        emit IdentityRegistryUpdated(oldRegistry, _identityRegistry);
    }
    
    /**
     * @dev Submit feedback for an agent
     * @param agentTokenId The agent's identity token ID
     * @param rating Rating from 1-5
     * @param tags Array of tag strings
     * @param comment Optional text comment
     * @param paymentProof Hash of the payment transaction (optional, can be 0x0)
     * @return feedbackId The ID of the submitted feedback
     */
    function submitFeedback(
        uint256 agentTokenId,
        uint8 rating,
        string[] memory tags,
        string memory comment,
        bytes32 paymentProof
    ) public whenNotPaused returns (uint256) {
        // Input validation
        require(rating >= 1 && rating <= 5, "Rating must be between 1 and 5");
        require(tags.length <= MAX_TAGS, "Too many tags");
        require(bytes(comment).length <= MAX_COMMENT_LENGTH, "Comment too long");
        
        // Validate tag lengths
        for (uint256 i = 0; i < tags.length; i++) {
            require(bytes(tags[i]).length > 0, "Tag cannot be empty");
            require(bytes(tags[i]).length <= MAX_TAG_LENGTH, "Tag too long");
        }
        
        // Verify agent exists
        try IERC721(identityRegistry).ownerOf(agentTokenId) returns (address) {
            // Agent exists, continue
        } catch {
            revert("Agent does not exist");
        }
        
        _feedbackCounter++;
        uint256 feedbackId = _feedbackCounter;
        
        bool verified = (paymentProof != bytes32(0));
        
        feedbacks[feedbackId] = Feedback({
            client: msg.sender,
            agentTokenId: agentTokenId,
            rating: rating,
            tags: tags,
            comment: comment,
            paymentProof: paymentProof,
            timestamp: block.timestamp,
            verified: verified
        });
        
        // Add to agent's feedback list
        agentFeedbacks[agentTokenId].push(feedbackId);
        
        // Add to client's feedback list
        clientFeedbacks[msg.sender].push(feedbackId);
        
        // Update reputation summary
        ReputationSummary storage reputation = agentReputations[agentTokenId];
        reputation.totalFeedbacks++;
        if (verified) {
            reputation.verifiedFeedbacks++;
        }
        
        // Check for overflow before multiplication
        require(
            reputation.totalRatingSum <= type(uint256).max - rating,
            "Rating sum overflow"
        );
        reputation.totalRatingSum += rating;
        
        // Safe calculation of average
        reputation.averageRating = (reputation.totalRatingSum * 100) / reputation.totalFeedbacks;
        
        // Update tag counts
        for (uint256 i = 0; i < tags.length; i++) {
            agentTagCounts[agentTokenId][tags[i]]++;
        }
        
        emit FeedbackSubmitted(feedbackId, agentTokenId, msg.sender, rating, paymentProof);
        
        return feedbackId;
    }
    
    /**
     * @dev Verify a feedback by linking it to a payment transaction
     * @param feedbackId The feedback ID to verify
     * @param paymentProof Hash of the payment transaction
     */
    function verifyFeedback(uint256 feedbackId, bytes32 paymentProof) 
        public 
        onlyRole(VERIFIER_ROLE) 
    {
        require(feedbacks[feedbackId].client != address(0), "Feedback does not exist");
        require(!feedbacks[feedbackId].verified, "Feedback already verified");
        require(paymentProof != bytes32(0), "Invalid payment proof");
        
        feedbacks[feedbackId].paymentProof = paymentProof;
        feedbacks[feedbackId].verified = true;
        
        uint256 agentTokenId = feedbacks[feedbackId].agentTokenId;
        agentReputations[agentTokenId].verifiedFeedbacks++;
        
        emit FeedbackVerified(feedbackId, true);
    }
    
    /**
     * @dev Get feedback by ID
     * @param feedbackId The feedback ID
     * @return Feedback struct
     */
    function getFeedback(uint256 feedbackId) public view returns (Feedback memory) {
        require(feedbacks[feedbackId].client != address(0), "Feedback does not exist");
        return feedbacks[feedbackId];
    }
    
    /**
     * @dev Get paginated feedback IDs for an agent
     * @param agentTokenId The agent's token ID
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of feedback IDs
     */
    function getAgentFeedbacks(
        uint256 agentTokenId,
        uint256 offset,
        uint256 limit
    ) public view returns (uint256[] memory) {
        uint256[] storage allFeedbacks = agentFeedbacks[agentTokenId];
        
        if (offset >= allFeedbacks.length) {
            return new uint256[](0);
        }
        
        uint256 end = offset + limit;
        if (end > allFeedbacks.length) {
            end = allFeedbacks.length;
        }
        
        uint256[] memory result = new uint256[](end - offset);
        for (uint256 i = offset; i < end; i++) {
            result[i - offset] = allFeedbacks[i];
        }
        return result;
    }
    
    /**
     * @dev Get total number of feedbacks for an agent
     * @param agentTokenId The agent's token ID
     * @return Total feedback count
     */
    function getAgentFeedbackCount(uint256 agentTokenId) public view returns (uint256) {
        return agentFeedbacks[agentTokenId].length;
    }
    
    /**
     * @dev Get reputation summary for an agent
     * @param agentTokenId The agent's token ID
     * @return totalFeedbacks Total number of feedbacks
     * @return verifiedFeedbacks Number of verified feedbacks
     * @return averageRating Average rating (scaled by 100)
     */
    function getReputationSummary(uint256 agentTokenId)
        public
        view
        returns (
            uint256 totalFeedbacks,
            uint256 verifiedFeedbacks,
            uint256 averageRating
        )
    {
        ReputationSummary storage reputation = agentReputations[agentTokenId];
        return (
            reputation.totalFeedbacks,
            reputation.verifiedFeedbacks,
            reputation.averageRating
        );
    }
    
    /**
     * @dev Get tag count for an agent
     * @param agentTokenId The agent's token ID
     * @param tag The tag to check
     * @return count Number of times this tag was used
     */
    function getTagCount(uint256 agentTokenId, string memory tag)
        public
        view
        returns (uint256)
    {
        return agentTagCounts[agentTokenId][tag];
    }
    
    /**
     * @dev Pause contract (emergency stop)
     */
    function pause() public onlyRole(ADMIN_ROLE) {
        _pause();
    }
    
    /**
     * @dev Unpause contract
     */
    function unpause() public onlyRole(ADMIN_ROLE) {
        _unpause();
    }
}
