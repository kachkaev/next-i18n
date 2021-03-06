const express = require("express");
const next = require("next");
const { resolve } = require("path");
const { createNextI18nMiddleware } = require("@next-i18n/server-express");
const { nextI18n } = require("./i18n");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

(async () => {
  const app = next({ dev });
  const handle = app.getRequestHandler();

  await app.prepare();
  const server = express();

  createNextI18nMiddleware(nextI18n, app, server, {
    // By default, it is assumed that the translation strings are in static/translations
    pathToTranslations: resolve(__dirname, "../translations"),

    // By default, the list of available languages is determined automatically from translation files
    // In any case, it is passed to the client via __NEXT_DATA__
    availableLanguages: ["en", "ru"],
  });

  server.get("*", (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`);
})();
