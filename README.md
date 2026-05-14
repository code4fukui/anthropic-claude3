# anthropic-claude3

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Conversation by [Anthropic Claude3](https://www.anthropic.com/claude)

## Features

- Provides an interface to use the Anthropic Claude3 language model
- Supports both command-line and web-based interactions
- Includes example code for fetching conversation responses

## Requirements

- [Deno](https://deno.land/) runtime
- Anthropic API key

## Usage

Command-line:

```sh
deno run -A https://code4fukui.github.io/anthropic-claude3/cli.js "Hello, world"
```

JavaScript:

```JavaScript
import { fetchConversation } from "https://code4fukui.github.io/anthropic-claude3/fetchConversation.js"

const txt = "How are you today?";
const res = await fetchConversation(txt);
console.log(res);
```

## Setup

Obtain an API key from [Anthropic Claude3](https://www.anthropic.com/claude) and set the `ANTHROPIC_API_KEY` environment variable.

## License

MIT License — see [LICENSE](LICENSE).