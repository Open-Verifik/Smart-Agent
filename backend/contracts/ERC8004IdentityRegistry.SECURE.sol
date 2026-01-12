// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

/**
 * @title ERC8004IdentityRegistry
 * @dev ERC-721 based Identity Registry for AI Agents (ERC8004)
 * @notice SECURE VERSION - Addresses all audit findings
 * Each AI agent gets a unique NFT that represents its identity
 */
contract ERC8004IdentityRegistry is ERC721, AccessControl, Pausable {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant REGISTRAR_ROLE = keccak256("REGISTRAR_ROLE");
    
    uint256 private _tokenIds;
    uint256 public constant MAX_TOKENS = type(uint256).max - 1;
    
    // Agent metadata structure
    struct AgentIdentity {
        string name;
        string description;
        string agentCardURI; // URL to Agent Card JSON (IPFS or HTTP)
        string[] capabilities; // List of agent capabilities
        address agentAddress; // The address that controls this agent
        uint256 createdAt;
        bool active;
    }
    
    // Mapping from token ID to agent identity
    mapping(uint256 => AgentIdentity) public agentIdentities;
    
    // Mapping from agent address to token ID
    mapping(address => uint256) public agentToTokenId;
    
    event AgentRegistered(
        uint256 indexed tokenId,
        address indexed agentAddress,
        string name,
        string agentCardURI
    );
    
    event AgentUpdated(
        uint256 indexed tokenId,
        address indexed agentAddress,
        string agentCardURI
    );
    
    event AgentDeactivated(uint256 indexed tokenId, address indexed agentAddress);
    event AgentReactivated(uint256 indexed tokenId, address indexed agentAddress);
    
    constructor() ERC721("AI Agent Identity", "AGENT") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(REGISTRAR_ROLE, msg.sender);
    }
    
    /**
     * @dev Register a new AI agent and mint its identity NFT
     * @param agentAddress The address that will control this agent
     * @param name Agent name
     * @param description Agent description
     * @param agentCardURI URI to the Agent Card JSON metadata
     * @param capabilities Array of capability strings
     * @return tokenId The minted token ID
     */
    function registerAgent(
        address agentAddress,
        string memory name,
        string memory description,
        string memory agentCardURI,
        string[] memory capabilities
    ) public onlyRole(REGISTRAR_ROLE) whenNotPaused returns (uint256) {
        // Input validation
        require(agentAddress != address(0), "Invalid agent address");
        require(bytes(name).length > 0, "Name cannot be empty");
        require(bytes(name).length <= 100, "Name too long");
        require(bytes(description).length > 0, "Description cannot be empty");
        require(bytes(description).length <= 500, "Description too long");
        require(bytes(agentCardURI).length > 0, "Agent card URI cannot be empty");
        require(capabilities.length > 0, "Must have at least one capability");
        require(capabilities.length <= 50, "Too many capabilities");
        require(agentToTokenId[agentAddress] == 0, "Agent already registered");
        require(_tokenIds < MAX_TOKENS, "Max tokens reached");
        
        _tokenIds++;
        uint256 newTokenId = _tokenIds;
        
        // Mint NFT to the agent address
        _mint(agentAddress, newTokenId);
        
        // Store agent identity
        agentIdentities[newTokenId] = AgentIdentity({
            name: name,
            description: description,
            agentCardURI: agentCardURI,
            capabilities: capabilities,
            agentAddress: agentAddress,
            createdAt: block.timestamp,
            active: true
        });
        
        // Update mapping
        agentToTokenId[agentAddress] = newTokenId;
        
        emit AgentRegistered(newTokenId, agentAddress, name, agentCardURI);
        
        return newTokenId;
    }
    
    /**
     * @dev Update agent metadata (only by agent owner or admin)
     * @param tokenId The agent's token ID
     * @param agentCardURI New Agent Card URI
     * @param capabilities Updated capabilities array
     */
    function updateAgent(
        uint256 tokenId,
        string memory agentCardURI,
        string[] memory capabilities
    ) public whenNotPaused {
        require(_ownerOf(tokenId) != address(0), "Agent does not exist");
        require(
            ownerOf(tokenId) == msg.sender || hasRole(ADMIN_ROLE, msg.sender),
            "Not authorized to update"
        );
        require(bytes(agentCardURI).length > 0, "Agent card URI cannot be empty");
        require(capabilities.length > 0, "Must have at least one capability");
        require(capabilities.length <= 50, "Too many capabilities");
        
        agentIdentities[tokenId].agentCardURI = agentCardURI;
        agentIdentities[tokenId].capabilities = capabilities;
        
        emit AgentUpdated(tokenId, agentIdentities[tokenId].agentAddress, agentCardURI);
    }
    
    /**
     * @dev Deactivate an agent (only by admin)
     * @param tokenId The agent's token ID
     */
    function deactivateAgent(uint256 tokenId) public onlyRole(ADMIN_ROLE) {
        require(_ownerOf(tokenId) != address(0), "Agent does not exist");
        require(agentIdentities[tokenId].active, "Agent already deactivated");
        
        agentIdentities[tokenId].active = false;
        emit AgentDeactivated(tokenId, agentIdentities[tokenId].agentAddress);
    }
    
    /**
     * @dev Reactivate an agent (only by admin)
     * @param tokenId The agent's token ID
     */
    function reactivateAgent(uint256 tokenId) public onlyRole(ADMIN_ROLE) {
        require(_ownerOf(tokenId) != address(0), "Agent does not exist");
        require(!agentIdentities[tokenId].active, "Agent already active");
        
        agentIdentities[tokenId].active = true;
        emit AgentReactivated(tokenId, agentIdentities[tokenId].agentAddress);
    }
    
    /**
     * @dev Get agent identity by token ID
     * @param tokenId The agent's token ID
     * @return Agent identity struct
     */
    function getAgentIdentity(uint256 tokenId) public view returns (AgentIdentity memory) {
        require(_ownerOf(tokenId) != address(0), "Agent does not exist");
        return agentIdentities[tokenId];
    }
    
    /**
     * @dev Get agent token ID by agent address
     * @param agentAddress The agent's address
     * @return tokenId The agent's token ID (0 if not registered)
     */
    function getAgentTokenId(address agentAddress) public view returns (uint256) {
        return agentToTokenId[agentAddress];
    }
    
    /**
     * @dev Check if an agent is registered and active
     * @param agentAddress The agent's address
     * @return isRegistered True if agent is registered
     * @return isActive True if agent is active
     * @return tokenId The agent's token ID
     */
    function isAgentRegistered(address agentAddress) 
        public 
        view 
        returns (bool isRegistered, bool isActive, uint256 tokenId) 
    {
        tokenId = agentToTokenId[agentAddress];
        isRegistered = tokenId != 0;
        if (isRegistered) {
            isActive = agentIdentities[tokenId].active;
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
    
    /**
     * @dev Override supportsInterface to support AccessControl
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
