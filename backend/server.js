const { createServer: createHttpServer } = require("node:http");
const { createRequire } = require("node:module");
const fs = require("node:fs/promises");
const path = require("node:path");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;
const frontendDir = path.resolve(__dirname, "..", "frontend");
const isProduction =
  process.env.NODE_ENV === "production" || process.argv.includes("--production");
const tiposIngresso = new Set(["estudante", "profissional"]);
const inscricoes = [];
let proximoId = 1;

app.use(cors());
app.use(express.json());

app.get("/inscricoes", (req, res) => {
  res.json(inscricoes);
});

app.post("/inscricoes", (req, res) => {
  const { nome, email, telefone = "", tipoIngresso } = req.body || {};
  const nomeNormalizado = typeof nome === "string" ? nome.trim() : "";
  const emailNormalizado = typeof email === "string" ? email.trim() : "";
  const tipoNormalizado =
    typeof tipoIngresso === "string" ? tipoIngresso.trim().toLowerCase() : "";

  if (!nomeNormalizado || !emailNormalizado || !tipoNormalizado) {
    return res.status(400).json({
      mensagem: "Nome, e-mail e tipo de ingresso são obrigatórios.",
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNormalizado)) {
    return res.status(400).json({ mensagem: "Informe um e-mail válido." });
  }

  if (!tiposIngresso.has(tipoNormalizado)) {
    return res.status(400).json({
      mensagem: "O tipo de ingresso deve ser estudante ou profissional.",
    });
  }

  if (
    inscricoes.some(
      (inscricao) => inscricao.email.toLowerCase() === emailNormalizado.toLowerCase(),
    )
  ) {
    return res.status(400).json({
      mensagem: "Já existe uma inscrição com este e-mail.",
    });
  }

  if (typeof telefone !== "string") {
    return res.status(400).json({ mensagem: "O telefone deve ser um texto." });
  }

  const novaInscricao = {
    id: proximoId++,
    nome: nomeNormalizado,
    email: emailNormalizado,
    telefone: telefone.trim(),
    tipoIngresso: tipoNormalizado,
  };

  inscricoes.push(novaInscricao);
  return res.status(201).json(novaInscricao);
});

app.delete("/inscricoes/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = inscricoes.findIndex((inscricao) => inscricao.id === id);

  if (indice === -1) {
    return res.status(404).json({ mensagem: "Inscrição não encontrada." });
  }

  inscricoes.splice(indice, 1);
  return res.status(204).end();
});

async function start() {
  const httpServer = createHttpServer(app);

  if (isProduction) {
    const buildDir = path.join(frontendDir, "dist");
    app.use(express.static(buildDir));
    app.get("*", (req, res) => {
      res.sendFile(path.join(buildDir, "index.html"));
    });
  } else {
    const requireFromFrontend = createRequire(
      path.join(frontendDir, "package.json"),
    );
    const { createServer: createViteServer } = requireFromFrontend("vite");
    const vite = await createViteServer({
      configFile: path.join(frontendDir, "vite.config.js"),
      root: frontendDir,
      server: {
        middlewareMode: true,
        hmr: { server: httpServer },
      },
      appType: "custom",
    });

    app.use(vite.middlewares);
    app.get("*", async (req, res, next) => {
      try {
        const indexHtml = await fs.readFile(
          path.join(frontendDir, "index.html"),
          "utf-8",
        );
        const html = await vite.transformIndexHtml(req.originalUrl, indexHtml);
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (error) {
        vite.ssrFixStacktrace(error);
        next(error);
      }
    });

    httpServer.on("close", () => vite.close());
  }

  httpServer.listen(port, () => {
    console.log(`Tech Future disponível em http://localhost:${port}`);
    console.log(`API de inscrições disponível em http://localhost:${port}/inscricoes`);
  });
}

start().catch((error) => {
  console.error("Não foi possível iniciar o servidor:", error);
  process.exitCode = 1;
});
