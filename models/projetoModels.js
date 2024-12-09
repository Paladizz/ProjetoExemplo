const conexao = require("../basededados/conexao");

class ProjetoModel {
    executaQuery(sql, parametros = "") {
        return new Promise((resolve, reject) => {
          conexao.query(sql, parametros, (error, resposta) => {
            if (error) {
              return reject(error);
            }
            return resolve(resposta);
          });
        });
    }
    listar() {
        const sql = "SELECT * FROM projetofinal.exemplo";
        return this.executaQuery(sql);
      }
      criar(novo) {
        const sql = "INSERT INTO projetofinal.exemplo SET ?";
        return this.executaQuery(sql, novo);
      }
    
atualizar(alterado, id) {
    const sql = "UPDATE projetofinal.exemplo SET ? WHERE id = ?";
    return this.executaQuery(sql, [alterado, id]);
}

delete(id) {
    const sql = "DELETE FROM projetofinal.exemplo WHERE id = ?";
    return this.executaQuery(sql, id);
}

}

module.exports = new ProjetoModel();
