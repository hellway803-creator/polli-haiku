# Pollinations integration evidence — polli-haiku

## What uses Pollinations

- **`pollinations-client.js`** (repo root):
  1. **LLM**: `PolliClient.chatCompletion(prompt)` → `POST https://gen.pollinations.ai/v1/chat/completions`
     (model `deepseek/deepseek-v4-flash`) — writes the haiku.
  2. **Image**: `PolliClient.generateImage(prompt)` → `POST https://gen.pollinations.ai/v1/images/generations`
     (model `flux`) — illustrates the haiku.
- Both send `Authorization: Bearer <user key>` — users pay their own Pollen.
- UI: `index.html` + `app.js` call both flows in sequence (haiku first, then art).

## Files

| File | Role |
| --- | --- |
| `pollinations-client.js` | Pollinations LLM + image generation (BYOP) |
| `app.js` | UI wiring |
| `index.html` | App entry |
