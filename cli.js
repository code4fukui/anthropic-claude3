import { fetchConversation } from "./fetchConversation.js"

const text = Deno.args[0];
if (!text) {
  console.log("[text]");
  Deno.exit(1);
}
const res = await fetchConversation(text);
console.log(res);
