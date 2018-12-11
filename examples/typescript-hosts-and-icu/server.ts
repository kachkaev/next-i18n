import * as express from "express";
import next from "next";
import { createNextI18nMiddleware } from "@next-i18n/server-express";
import { nextI18n } from "./i18n";
import { env } from "./config";

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

(async () => {
  const app = next({ dev });
  const handle = app.getRequestHandler();

  await app.prepare();
  const server = express();

  createNextI18nMiddleware(nextI18n, app, server, {
    hostByLanguage: {
      en: env.HOST_EN,
      ru: env.HOST_RU,
    },
  });

  server.get("*", (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`);
})();
