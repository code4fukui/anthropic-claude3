import { getEnv } from "https://code4fukui.github.io/ai_chat/getEnv.js";
import { log } from "https://code4fukui.github.io/openai-speech/log.js";

const KEY = await getEnv("ANTHROPIC_API_KEY");

/*
https://api.anthropic.com/v1/messages \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --header "anthropic-version: 2023-06-01" \
     --header "content-type: application/json" \
     --data \
'{
    "model": "claude-3-opus-20240229",
    "max_tokens": 1024,
    "messages": [
        {"role": "user", "content": "Hello, world"}
    ]
}'
*/

export const fetchConversation = async (messages, opt = {}) => {
  console.log(messages);
  if (!Array.isArray(messages)) {
    messages = [ { role: "user", content: messages }];
  }
  const url = "https://api.anthropic.com/v1/messages";
  const params = {
    model: opt.model || "claude-3-opus-20240229",
    max_tokens: opt.max_tokens || 1024,
    messages,
  };
  console.log("p", params);
  const options = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "x-api-key": KEY,
      "anthropic-version": "2023-06-01",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  };
  const res = await (await fetch(url, options)).json();
  console.log("r", res);
  await log({ messages, res });
  return res.content[0].text;
};
