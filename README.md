# 🌊 polli-haiku

Turn any mood or topic into a **haiku written by the Pollinations LLM** (`gen.pollinations.ai/v1/chat/completions`) and **illustrated by the Pollinations image model** (`gen.pollinations.ai/v1/images/generations`).

[![Made with pollinations.ai](https://raw.githubusercontent.com/pollinations/pollinations/123ed07456106a4f752c0a22c584e8cadd2db6a8/packages/ui/src/brand/badge-made-with.svg)](https://pollinations.ai/?ref=badge)

## Try it

Open `index.html` locally, or deploy to any static host (Cloudflare Pages / GitHub Pages).

1. Paste a Pollinations API key from https://enter.pollinations.ai/keys (BYOP — you pay your own Pollen)
2. Type a topic — *"rainy morning in Jakarta"*, *"a tired cat"*, anything
3. Click **Write haiku + art ✨**
4. The Polli LLM writes a 5-7-5 haiku, the Polli image model draws an illustration, and you can download the art

## Pollinations integration (verified)

- `pollinations-client.js` (repo root) calls:
  - `POST https://gen.pollinations.ai/v1/chat/completions` (`PolliClient.chatCompletion`) — the LLM haiku
  - `POST https://gen.pollinations.ai/v1/images/generations` (`PolliClient.generateImage`) — the illustration
- Both calls use `Authorization: Bearer <user key>` (BYOP).

## License

MIT
