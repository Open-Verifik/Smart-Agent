// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/**
 * @title ERC8004ValidationRegistry
 * @dev Validation Registry for AI Agents (ERC8004)
 * @notice SECURE VERSION - Addresses all audit findings
 * Stores cryptographic proofs of task completion and validation
 */
contract ERC8004ValidationRegistry is AccessControl, Pausable {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant VALIDATOR_ROLE = keccak256("VALIDATOR_ROLE");
    
    // Constants for limits
    uint256 public constant MAX_TASK_ID_LENGTH = 100;
    uint256 public constant MAX_METADATA_URI_LENGTH = 500;
    
    // Validation proof structure
    struct ValidationProof {
        uint256 agentTokenId; // Agent's identity token ID
        string taskId; // Unique task identifier
        bytes32 outputHash; // Hash of the agent's output
        bytes32 proofHash; // Hash of the validation proof (ZK proof, re-execution result, etc.)
        address validator; // Address of the validator (if any)
        ValidationType validationType; // Type of validation
        bool isValid; // Whether the validation passed
        uint256 timestamp;
        string metadataURI; // URI to additional metadata (IPFS, etc.)
    }
    
    enum ValidationType {
        NONE, // No validation
        RE_EXECUTION, // Stake-secured re-execution
        ZERO_KNOWLEDGE, // ZK proof
        CONSENSUS, // Multiple validators consensus
        ORACLE // Oracle-based validation
    }
    
    // Mapping from validation ID to ValidationProof
    mapping(uint256 => ValidationProof) public validations;
    
    // Mapping from agent token ID to array of validation IDs
    mapping(uint256 => uint256[]) private agentValidations;
    
    // Mapping from task ID to validation ID
    mapping(string => uint256) public taskToValidation;
    
    // Mapping from output hash to validation ID (for deduplication)
    mapping(bytes32 => uint256) public outputHashToValidation;
    
    // Mapping to track authorized validators per agent
    mapping(uint256 => mapping(address => bool)) public authorizedValidators;
    
    uint256 private _validationCounter;
    
    // Reference to Identity Registry
    address public identityRegistry;
    
    event ValidationRecorded(
        uint256 indexed validationId,
        uint256 indexed agentTokenId,
        string taskId,
        bytes32 outputHash,
        ValidationType validationType,
        bool isValid
    );
    
    event ValidatorAuthorized(uint256 indexed agentTokenId, address indexed validator);
    event ValidatorRevoked(uint256 indexed agentTokenId, address indexed validator);
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
        _grantRole(VALIDATOR_ROLE, msg.sender);
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
     * @dev Authorize a validator for a specific agent
     * @param agentTokenId The agent's token ID
     * @param validator Address to authorize
     */
    function authorizeValidator(uint256 agentTokenId, address validator) 
        public 
        onlyRole(ADMIN_ROLE) 
    {
        require(validator != address(0), "Invalid validator address");
        
        // Verify agent exists
        try IERC721(identityRegistry).ownerOf(agentTokenId) returns (address) {
            // Agent exists
        } catch {
            revert("Agent does not exist");
        }
        
        authorizedValidators[agentTokenId][validator] = true;
        emit ValidatorAuthorized(agentTokenId, validator);
    }
    
    /**
     * @dev Revoke validator authorization
     * @param agentTokenId The agent's token ID
     * @param validator Address to revoke
     */
    function revokeValidator(uint256 agentTokenId, address validator) 
        public 
        onlyRole(ADMIN_ROLE) 
    {
        authorizedValidators[agentTokenId][validator] = false;
        emit ValidatorRevoked(agentTokenId, validator);
    }
    
    /**
     * @dev Record a validation proof for an agent's task completion
     * @param agentTokenId The agent's identity token ID
     * @param taskId Unique task identifier
     * @param outputHash Hash of the agent's output
     * @param proofHash Hash of the validation proof
     * @param validator Address of the validator (can be address(0) for self-validation)
     * @param validationType Type of validation used
     * @param isValid Whether the validation passed
     * @param metadataURI URI to additional metadata
     * @return validationId The ID of the recorded validation
     */
    function recordValidation(
        uint256 agentTokenId,
        string memory taskId,
        bytes32 outputHash,
        bytes32 proofHash,
        address validator,
        ValidationType validationType,
        bool isValid,
        string memory metadataURI
    ) public whenNotPaused returns (uint256) {
        // Input validation
        require(bytes(taskId).length > 0, "Task ID cannot be empty");
        require(bytes(taskId).length <= MAX_TASK_ID_LENGTH, "Task ID too long");
        require(outputHash != bytes32(0), "Output hash cannot be zero");
        require(bytes(metadataURI).length <= MAX_METADATA_URI_LENGTH, "Metadata URI too long");
        
        // Access control: Must be authorized validator or have VALIDATOR_ROLE
        require(
            hasRole(VALIDATOR_ROLE, msg.sender) || 
            authorizedValidators[agentTokenId][msg.sender],
            "Not authorized to record validation"
        );
        
        // Verify agent exists
        try IERC721(identityRegistry).ownerOf(agentTokenId) returns (address) {
            // Agent exists
        } catch {
            revert("Agent does not exist");
        }
        
        // Check if validation for this task already exists
        require(taskToValidation[taskId] == 0, "Validation for this task already exists");
        
        _validationCounter++;
        uint256 validationId = _validationCounter;
        
        validations[validationId] = ValidationProof({
            agentTokenId: agentTokenId,
            taskId: taskId,
            outputHash: outputHash,
            proofHash: proofHash,
            validator: validator,
            validationType: validationType,
            isValid: isValid,
            timestamp: block.timestamp,
            metadataURI: metadataURI
        });
        
        // Update mappings
        agentValidations[agentTokenId].push(validationId);
        taskToValidation[taskId] = validationId;
        outputHashToValidation[outputHash] = validationId;
        
        emit ValidationRecorded(
            validationId,
            agentTokenId,
            taskId,
            outputHash,
            validationType,
            isValid
        );
        
        return validationId;
    }
    
    /**
     * @dev Get validation proof by ID
     * @param validationId The validation ID
     * @return ValidationProof struct
     */
    function getValidation(uint256 validationId) public view returns (ValidationProof memory) {
        require(validations[validationId].timestamp != 0, "Validation does not exist");
        return validations[validationId];
    }
    
    /**
     * @dev Get validation ID for a task
     * @param taskId The task ID
     * @return validationId The validation ID (0 if not found)
     */
    function getValidationByTask(string memory taskId) public view returns (uint256) {
        return taskToValidation[taskId];
    }
    
    /**
     * @dev Get validation ID by output hash
     * @param outputHash The output hash
     * @return validationId The validation ID (0 if not found)
     */
    function getValidationByOutput(bytes32 outputHash) public view returns (uint256) {
        return outputHashToValidation[outputHash];
    }
    
    /**
     * @dev Get paginated validation IDs for an agent
     * @param agentTokenId The agent's token ID
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of validation IDs
     */
    function getAgentValidations(
        uint256 agentTokenId,
        uint256 offset,
        uint256 limit
    ) public view returns (uint256[] memory) {
        uint256[] storage allValidations = agentValidations[agentTokenId];
        
        if (offset >= allValidations.length) {
            return new uint256[](0);
        }
        
        uint256 end = offset + limit;
        if (end > allValidations.length) {
            end = allValidations.length;
        }
        
        uint256[] memory result = new uint256[](end - offset);
        for (uint256 i = offset; i < end; i++) {
            result[i - offset] = allValidations[i];
        }
        return result;
    }
    
    /**
     * @dev Get total number of validations for an agent
     * @param agentTokenId The agent's token ID
     * @return Total validation count
     */
    function getAgentValidationCount(uint256 agentTokenId) public view returns (uint256) {
        return agentValidations[agentTokenId].length;
    }
    
    /**
     * @dev Get validation statistics for an agent
     * @param agentTokenId The agent's token ID
     * @return totalValidations Total number of validations
     * @return validCount Number of valid validations
     * @return invalidCount Number of invalid validations
     */
    function getValidationStats(uint256 agentTokenId)
        public
        view
        returns (
            uint256 totalValidations,
            uint256 validCount,
            uint256 invalidCount
        )
    {
        uint256[] storage validationIds = agentValidations[agentTokenId];
        totalValidations = validationIds.length;
        
        for (uint256 i = 0; i < validationIds.length; i++) {
            if (validations[validationIds[i]].isValid) {
                validCount++;
            } else {
                invalidCount++;
            }
        }
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
