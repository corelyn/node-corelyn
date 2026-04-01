# corelyn-node

**corelyn-node** is a Node.js SDK for interacting with the Corelyn AI API. It provides both synchronous-like (Promise-based) and async/await methods for sending prompts and receiving AI-generated responses.

---

## Features

* ✅ Easy integration with Corelyn AI API
* ✅ Support for default system prompts and custom messages
* ✅ Change models dynamically
* ✅ Synchronous-like Promise-based API
* ✅ Modern async/await support
* ✅ Handles errors gracefully
* ✅ Compatible with Node.js projects

---

## Installation

```bash
npm install @corelyn/corelyn-node
```

---

## Quick Start

```javascript
const CorelynSDK = require("@corelyn/corelyn-node");

// Initialize SDK with your API key
const sdk = new CorelynSDK("YOUR_API_KEY_HERE");

// Set a custom model
sdk.setModel("cerebras/llama3.1-8b");

// Send a prompt (Promise-based)
sdk.getAIResponse("Hello Corelyn!")
  .then(response => console.log("AI Response:", response));

// Or use async/await
(async () => {
  const response = await sdk.getAIResponseAsync("Hello Corelyn Async!");
  console.log("Async AI Response:", response);
})();
```

---

## SDK Usage

### Constructor

```javascript
const sdk = new CorelynSDK(apiKey, defaultModel, systemPrompt);
```

* `apiKey` (string) – Your Corelyn API key (required)
* `defaultModel` (string) – Default model to use (`"cerebras/llama3.1-8b"` by default)
* `systemPrompt` (string) – Default system message (`"Your name is Corelyn"` by default)

### Methods

#### `setModel(model: string)`

Change the default model globally.

```javascript
sdk.setModel("another-model");
```

---

#### `getAIResponse(userPrompt, systemPrompt, messages, model)`

Sends a prompt to the AI and returns a Promise.

* `userPrompt` (string) – User input
* `systemPrompt` (string, optional) – Overrides default system prompt
* `messages` (array, optional) – Custom messages array
* `model` (string, optional) – Override the default model

```javascript
sdk.getAIResponse("Hello!").then(console.log);
```

---

#### `getAIResponseAsync(userPrompt, systemPrompt, messages, model)`

Async/await version of `getAIResponse`.

```javascript
(async () => {
  const response = await sdk.getAIResponseAsync("Async prompt!");
  console.log(response);
})();
```

---

## Custom Messages Example

```javascript
const messages = [
  { role: "system", content: "You are Corelyn, a helpful AI." },
  { role: "user", content: "Explain JavaScript closures." }
];

const response = await sdk.getAIResponseAsync(null, null, messages);
console.log(response);
```

---

## Error Handling

All methods handle API errors gracefully and return `null` if an error occurs. Errors are also printed to the console for debugging.

```javascript
const response = await sdk.getAIResponseAsync("This may fail");
if (!response) {
  console.error("Failed to get AI response.");
}
```

---

## License

MIT © 2026
