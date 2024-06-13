import { fetchConversation } from "./fetchConversation.js"

const txt = "今日の調子はどうですか？";
const res = await fetchConversation(txt);
console.log(res);
