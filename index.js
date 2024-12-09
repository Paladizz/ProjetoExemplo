const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/index");
const conexao = require("./basededados/conexao");
const tabelas = require("./basededados/tabelas");

tabelas.init(conexao);
router(app);

app.listen(port, (error) => {
    if (error) {
        console.log("Erro.");
        return;
    }
    console.log(`Servidor está aberto na porta ${port}`);
});
