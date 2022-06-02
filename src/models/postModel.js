var database = require("../database/config");

function listar() {
    console.log("ACESSEI O POST  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT 
            post.idPost,
            post.descricao,
            post.fk_idUser,
            usuarios.idUser,
            usuarios.nome,
            usuarios.email,
            usuarios.senha
        FROM post 
            INNER JOIN usuarios 
                ON post.fk_idUser = usuarios.idUser;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O POST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucao = `
        SELECT 
        post.idPost,
        post.descricao,
        post.fk_idUser,
        usuarios.idUser,
        usuarios.nome,
        usuarios.email,
        usuarios.senha,
        dtCadastro
        FROM post 
            INNER JOIN usuarios 
                ON post.fk_idUser = usuarios.idUser
        WHERE post.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPorUsuario(idUser) {
    console.log("ACESSEI O POST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
       SELECT 
       post.idPost,
       post.descricao,
       post.fk_idUser,
       usuarios.idUser,
       usuarios.nome,
       usuarios.email,
       usuarios.senha,
       dtCadastro
        FROM post 
            INNER JOIN usuarios 
                ON post.fk_idUser = usuarios.idUser
        WHERE usuarios.idUser = ${idUser};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function publicar(descricao, idUser) {
    console.log("ACESSEI O POST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", descricao, idUser);
    var instrucao = `
        INSERT INTO post (descricao, fk_idUser) VALUES ('${descricao}', ${idUser});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar(novaDescricao, idPost) {
    console.log("ACESSEI O POST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idPost);
    var instrucao = `
        UPDATE post SET descricao = '${novaDescricao}' WHERE id = ${idPost};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idPost) {
    console.log("ACESSEI O POST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idPost);
    var instrucao = `
        DELETE FROM post WHERE id = ${idPost};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar
}
