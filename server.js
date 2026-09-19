const dotenv = require("dotenv");
dotenv.config({ quiet: true });

const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
   console.log(`Rodando em http://localhost:${PORT}`);
});

const publicPath = path.join(__dirname, "public");
const pagesPath = path.join(publicPath, "pages");

app.use("/assets", express.static(path.join(publicPath, "assets")));

app.get("/", (req, res) => {
   res.sendFile(path.join(pagesPath, "index.html"));
});

app.get("/login", (req, res) => {
   res.sendFile(path.join(pagesPath, "login.html"));
});

app.get("/cadastro", (req, res) => {
   res.sendFile(path.join(pagesPath, "cadastro.html"));
});

app.use((req, res) => {
   res.status(404).sendFile(path.join(pagesPath, "404.html"));
});
