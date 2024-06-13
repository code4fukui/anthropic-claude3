import { serveWeb } from "https://code4fukui.github.io/wsutil/serveWeb.js";
import { fetchConversation } from "./fetchConversation.js";

serveWeb(async (param, req, path, conn) => {
  if (path == "/api/conversation") {
    return await fetchConversation(param.messages);
  }
  return null;
});
