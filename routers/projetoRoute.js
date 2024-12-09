//const Router = require("express").Router;
const { Router } = require("express");
const router = Router();
const projetoControllers = require("../controllers/projetoControllers");

//get post put delete

router.get("/projetofinal", projetoControllers.retrieve);
router.post("/projetofinal", projetoControllers.criar);
router.put("/projetofinal/:id", projetoControllers.alterar);
router.delete("/projetofinal/:id", projetoControllers.apagar);

module.exports = router;
