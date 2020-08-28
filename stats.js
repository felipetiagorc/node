const os = require("os");
const log = require("./logger");

setInterval(() => {
  const { freemem, totalmem } = os;

  const total = parseInt(totalmem() / 1024 / 1024);
  const mem = parseInt(freemem() / 1024 / 1024);
  const porcento = parseInt((mem / total) * 100);

  const stats = [
    {
      Free: `${mem} MB`,
      Total: `${total} MB`,
      Porcentage: `${porcento}%`,
    },
  ];
  console.clear();

  console.log(`Memória total: ${total} MB
                 Memória usada: ${mem} MB
                 Porcentagem usada: ${porcento} %`);

  log(`${JSON.stringify(stats)}\n`);
}, 1000);
