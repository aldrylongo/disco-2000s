var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuarios;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuarios WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrar(nome, email, dtNascimento, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, dtNascimento, senha);


    var instrucao = `
        INSERT INTO usuarios (nome, email, dtNascimento, senha) VALUES ('${nome}', '${email}', '${dtNascimento}', '${senha}');`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function update(email) {
    var instrucao = `UPDATE usuarios SET geracoes = 
    case 
    when truncate(datediff(now(), dtNascimento) / 365,0) >= 41 and truncate(datediff(now(), dtNascimento) / 365,0) <= 100 then "Boomers"
    when truncate(datediff(now(), dtNascimento) / 365,0) >= 25 and truncate(datediff(now(), dtNascimento) / 365,0) <= 40 then "Millenial"
    when truncate(datediff(now(), dtNascimento) / 365,0) >= 15 and truncate(datediff(now(), dtNascimento) / 365,0) <= 24 then "Geração Z"
    else 0 end where email = '${email}';
`;
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    update,
    listar,
};