const http = require("http");
const fs = require("fs");
const path = require("path");
http
  .createServer((req, res) => {
    const file = req.url === "/" ? "index.html" : req.url;
    const filePath = path.join(__dirname, "public", file);
    const NomeExtensao = path.extname(filePath); // pega extensão do arquivo ex: '.css'
    const TiposPermitidos = [".html", ".js", ".css"];
    const permitidos = TiposPermitidos.find((item) => {
      return item === NomeExtensao;
    });
    if (!permitidos) return;

    fs.readFile(filePath, (err, content) => {
      if (err) throw err;
      res.end(content);
    });
  })
  .listen(5555, () => console.log("Servidor Rodando na porta 5555"));
