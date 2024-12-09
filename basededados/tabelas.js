class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaX();
    }

    criarTabelaX() {
        const sql = `
            CREATE TABLE IF NOT EXISTS exemplo (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                criadoEm DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        `;
        this.conexao.query(sql, (error) => {
            if (error) {
                console.error("Erro ao criar a tabela:");
                console.error(error.message); 
                return;
            }
            console.log("A tabela foi criada com sucesso.");
        });
    }
    
}

module.exports = new Tabelas();
