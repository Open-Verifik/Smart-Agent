# Implementation Plan: Persistent Chat Sessions & History

To resolve the issue of losing chat history and to provide a full chat management experience, we will implement server-side session storage, a history sidebar, and automated cleanup.

## 1. Backend: Data Persistence & Management

### 1.1 New Repository: `src/repositories/conversation.repository.js`

-   **Purpose**: File-based storage for chat histories with metadata.
-   **Storage**: `data/conversations/<conversationId>.json`
-   **Data Structure**:
    ```json
    {
    	"id": "uuid",
    	"title": "New Chat", // Default title, updatable
    	"created_at": "ISO Date",
    	"updated_at": "ISO Date",
    	"owner_address": "0xValietAddress...", // Optional, for filtering
    	"messages": []
    }
    ```
-   **Methods**:
    -   `create(initialMessage, ownerAddress)`: Generates UUID, creates file with metadata, auto-generates title from first message (first 30 chars).
    -   `get(conversationId)`: Reads file, returns full object.
    -   `list(ownerAddress)`: Returns list of `{id, title, updated_at}` for the sidebar, filtered by owner if provided.
    -   `appendMessages(conversationId, newMessages)`: Appends messages and updates `updated_at`.
    -   `updateTitle(conversationId, newTitle)`: Updates the `title` field.
    -   `delete(conversationId)`: Deletes the file.
    -   `cleanup(days)`: Scans directory, parses JSON, deletes files where `updated_at` < `now - days`.

### 1.2 Update Controller: `src/controllers/agent.controller.js`

-   **Modify `chat` method**:
    -   Accept `conversationId` and `walletAddress` in body.
    -   On new chat (no ID): Call `create`.
    -   On existing chat: Call `appendMessages`.
-   **New Endpoints**:
    -   `GET /api/agent/conversations`: List conversations (query param: `walletAddress`).
    -   `GET /api/agent/history/:conversationId`: Get full details of one chat.
    -   `PATCH /api/agent/conversations/:conversationId`: Update title (`{ title: '...' }`).
    -   `DELETE /api/agent/conversations/:conversationId`: Delete chat.

### 1.3 Update Routes: `src/routes/agent.routes.js`

-   Register the new endpoints.

### 1.4 Background Job: Cleanup Service

-   **Implementation**: Simple check on server startup in `index.js`.
-   **Logic**: Run `ConversationRepository.cleanup(30)` to delete chats older than 30 days.

## 2. Frontend: Session & History UI

### 2.1 Layout Update (`chat.component.html`)

-   **Structure**: Implement a "Sidnav" layout (using `mat-sidenav` or custom CSS grid).
-   **Sidebar (History)**:
    -   **Header**: "My Chats" title and "New Chat (+)" button.
    -   **List**:
        -   Iterate over `conversations` signal.
        -   Display Title and relative time (e.g. "2h ago").
        -   Highlight active conversion.
        -   **Edit Action**: Double click or Edit icon to rename (turns text into input).
    -   **Responsive**: Sidebar should be collapsible on mobile (drawer).

### 2.2 Component Logic (`chat.component.ts`)

-   **State**:
    -   `conversations`: Signal<List>.
    -   `currentConversationId`: Signal<string | null>.
-   **Initialization**:
    -   Fetch conversation list.
    -   If `localStorage` has ID, select it.
-   **Workflow**:
    -   **New Chat**: Clears `currentConversationId` and `messages`. UI shows empty chat. First message triggers `create` on backend.
    -   **Select Chat**: Calls `GET history/:id`, updates `messages`, updates `currentConversationId`.
    -   **Rename**: Calls `PATCH`, then updates local list item.
    -   **Delete**: Calls `DELETE`, removes from list, if current was deleted -> New Chat.

## Estimated Effort

-   **Backend Refactor**: ~1.5 hours
-   **Frontend UI/UX**: ~1.5 hours
