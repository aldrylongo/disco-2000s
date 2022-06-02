var database = require("../database/config");

function buscarUltimosCadastros(idUser, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
                        idUser, 
                        nome,  
                        email,
                        idade,
                        dtCadastro
                    from usuarios
                    order by idade desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
                        idUser, 
                        nome,
                        email,
                        idade
                        dtCadastro
                    from usuarios
                    order by idade desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarCadastroEmTempoReal(idUser) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
                        idUser, 
                        nome,  
                        email,
                        dtCadastro, 
                    from usuarios
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
                        idUser, 
                        nome,
                        email,
                        dtCadastro, 
                        from usuarios
                    order by id desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function metricas() {
    var instrucao = `
    select geracoes, count(geracoes) as contagem from usuarios where geracoes is not null group by geracoes;
    `

    return database.executar(instrucao);
}

module.exports = {
    metricas,
    buscarUltimosCadastros,
    buscarCadastroEmTempoReal
}
