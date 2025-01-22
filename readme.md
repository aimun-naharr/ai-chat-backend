# Backend Implementation for Chat Feature

## Overview

The backend serves as a mock AI response generator for handling chat messages sent from the frontend. It provides an API to process customer queries and return simulated AI responses.

Project Setup

## Prerequisites

- Install Node.js and npm.
- Install dependencies using the command:
  ```bash
  npm install
  ```

## Folder Structure

```
/ai-chat-backend
    main.js
  package.json
  README.md
```

## Running the Server

To start the server, run the following command:

```bash
node src/main.js
```

The server will be accessible at `http://localhost:5000`.

## API Endpoints

### 1. POST `/chat`

- **Description:** Accepts a user message and returns an AI-generated response.
- **Request Body:**
  ```json
  {
    "message": "Hello AI"
  }
  ```
- **Response:**
  ```json
  {
    "response": "Hello AI"
  }
  ```
