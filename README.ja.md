# anthropic-claude3

[Anthropic Claude3](https://www.anthropic.com/claude) による会話

## 機能

- Anthropic Claude3 言語モデルを利用するためのインターフェースを提供
- コマンドラインおよびWebベースのインタラクションをサポート
- 会話の応答を取得するためのサンプルコードを同梱

## 要件

- [Deno](https://deno.land/) ランタイム
- Anthropic APIキー

## 使い方

コマンドライン:

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

## セットアップ

[Anthropic Claude3](https://www.anthropic.com/claude) からAPIキーを取得し、`ANTHROPIC_API_KEY` 環境変数を設定してください。

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
