const projetoModels = require("../models/projetoModels");

class ProjetoController {
    retrieve(req,res) {
        const lista = projetoModels.listar();
        return lista
          .then((assign) => res.status(200).json(assign))
          .catch((error) => res.status(400).json(error.message));
    }
    criar() {
        const novo = req.body;
        const criado = projetoModels.criar(novo);
        return criado
          .then((novoCriado) => res.status(201).json(novoCriado))
          .catch((error) => res.status(400).json(error.message));
    }

    alterar(req, res) {
        const { id } = req.params;
        const alterado = req.body; 
        const criado = projetoModel.atualizar(alterado, id);
        return criado
            .then((resultadoalterado) => res.status(200).json(resultadoalterado))
            .catch((error) => res.status(400).json(error.message));
    }
    

    apagar(req, res) {
        const { id } = req.params;
        const criado = projetoModel.delete(id); 
        return criado
            .then((resultadoApagado) => res.status(200).json(resultadoApagado))
            .catch((error) => res.status(400).json(error.message));
    }
    
}
module.exports = new ProjetoController();
