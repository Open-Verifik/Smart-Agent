const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const DATA_DIR = path.resolve(__dirname, "../../data/conversations");

// Ensure directory exists
if (!fs.existsSync(DATA_DIR)) {
	fs.mkdirSync(DATA_DIR, { recursive: true });
}

class ConversationRepository {
	/**
	 * Create a new conversation
	 * @param {string} ownerAddress - Optional wallet address of the user
	 * @param {string} initialMessage - First message content to generate title
	 * @returns {Object} The new conversation object
	 */
	static create(ownerAddress = null, initialMessage = "") {
		const id = crypto.randomUUID();
		const now = new Date().toISOString();

		// Generate a simple title from the first message
		let title = "New Chat";
		if (initialMessage) {
			title = initialMessage.substring(0, 30);
			if (initialMessage.length > 30) title += "...";
		}

		const conversation = {
			id,
			title,
			created_at: now,
			updated_at: now,
			owner_address: ownerAddress,
			messages: [],
		};

		this.save(conversation);
		return conversation;
	}

	/**
	 * Get a conversation by ID
	 * @param {string} id
	 * @returns {Object|null}
	 */
	static get(id) {
		const filePath = path.join(DATA_DIR, `${id}.json`);
		if (!fs.existsSync(filePath)) return null;

		try {
			const data = fs.readFileSync(filePath, "utf8");
			return JSON.parse(data);
		} catch (error) {
			console.error(`Error reading conversation ${id}:`, error);
			return null;
		}
	}

	/**
	 * Save/Update a conversation
	 * @param {Object} conversation
	 */
	static save(conversation) {
		const filePath = path.join(DATA_DIR, `${conversation.id}.json`);
		fs.writeFileSync(filePath, JSON.stringify(conversation, null, 2));
	}

	/**
	 * List conversations, optionally filtered by owner
	 * @param {string} ownerAddress
	 * @returns {Array} List of summaries {id, title, updated_at}
	 */
	static list(ownerAddress = null) {
		const files = fs.readdirSync(DATA_DIR);
		const conversations = [];

		for (const file of files) {
			if (!file.endsWith(".json")) continue;

			try {
				const filePath = path.join(DATA_DIR, file);
				// We read the whole file. If performance becomes an issue, we should use a proper DB.
				// For FS, this is fine for now.
				const content = fs.readFileSync(filePath, "utf8");
				const data = JSON.parse(content);

				// Filter by owner if provided
				// If ownerAddress is provided, strictly match.
				// If data.owner_address is null/undefined, it matches anonymous requests (if we support that logic),
				// BUT commonly we want strict ownership.

				// Let's adopt strictly: if ownerAddress is requested, only return matches.
				if (ownerAddress) {
					if (data.owner_address?.toLowerCase() === ownerAddress.toLowerCase()) {
						conversations.push({
							id: data.id,
							title: data.title,
							updated_at: data.updated_at,
						});
					}
				} else {
					// Admin/Dev mode or listing everything (Not recommended for prod)
					// Or listing anonymous chats?
					// Let's just list all if no owner specified for now.
					conversations.push({
						id: data.id,
						title: data.title,
						updated_at: data.updated_at,
					});
				}
			} catch (err) {
				console.warn(`Skipping corrupt file ${file}`);
			}
		}

		// Sort by updated_at desc
		return conversations.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
	}

	/**
	 * Append messages to a conversation
	 * @param {string} id
	 * @param {Array} newMessages
	 * @returns {Object} Updated conversation
	 */
	static appendMessages(id, newMessages) {
		const conversation = this.get(id);
		if (!conversation) throw new Error("Conversation not found");

		conversation.messages.push(...newMessages);
		conversation.updated_at = new Date().toISOString();

		this.save(conversation);
		return conversation;
	}

	/**
	 * Update conversation title
	 * @param {string} id
	 * @param {string} title
	 */
	static updateTitle(id, title) {
		const conversation = this.get(id);
		if (!conversation) throw new Error("Conversation not found");

		conversation.title = title;
		conversation.updated_at = new Date().toISOString();
		this.save(conversation);
		return conversation;
	}

	/**
	 * Delete a conversation
	 * @param {string} id
	 */
	static delete(id) {
		const filePath = path.join(DATA_DIR, `${id}.json`);
		if (fs.existsSync(filePath)) {
			fs.unlinkSync(filePath);
		}
	}

	/**
	 * Cleanup old conversations
	 * @param {number} daysOld
	 */
	static cleanup(daysOld = 30) {
		console.log(`[Cleanup] Starting cleanup of chats older than ${daysOld} days...`);
		const files = fs.readdirSync(DATA_DIR);
		const threshold = new Date();
		threshold.setDate(threshold.getDate() - daysOld);

		let count = 0;

		for (const file of files) {
			if (!file.endsWith(".json")) continue;
			const filePath = path.join(DATA_DIR, file);

			try {
				const content = fs.readFileSync(filePath, "utf8");
				const data = JSON.parse(content);

				const lastUpdated = new Date(data.updated_at);
				if (lastUpdated < threshold) {
					fs.unlinkSync(filePath);
					count++;
					console.log(`[Cleanup] Deleted ${file}`);
				}
			} catch (err) {
				console.warn(`[Cleanup] Error processing ${file}:`, err.message);
			}
		}
		console.log(`[Cleanup] Finished. Deleted ${count} conversations.`);
	}
}

module.exports = ConversationRepository;
