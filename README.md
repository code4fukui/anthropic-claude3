# anthropic-claude3

Conversation by [Anthropic Claude3](https://www.anthropic.com/claude)

## Setup

get a API_KEY from [Anthropic Claude3](https://www.anthropic.com/claude)

edit .env
```
ANTHROPIC_API_KEY=****
```
or set the environment variables
```
export ANTHROPIC_API_KEY=****
```

## Usage

```sh
deno run -A https://code4fukui.github.io/anthropic-claude3/cli.js こんにちは
```

```JavaScript
import { fetchSpeech } from "https://code4fukui.github.io/anthropic-claude3/fetchConversation.js"

const txt = "今日の調子はどうですか？";
const res = await fetchConversation(txt);
console.log(res);
```

## Demo

```sh
deno run -A example.js
```

## Web App Demo

```sh
deno run -A server.js 8080
```
open http://localhost:8080/
