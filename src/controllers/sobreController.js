var sobreModel = require("../models/sobreModel");

function buscarUltimosCadastros(req, res) {

    const limite_linhas = 7;

    var idUser = req.params.idUser;

    console.log(`Recuperando os ultimos ${limite_linhas} cadastros`);

    medidaModel.buscarUltimosCadastros(idUser, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos cadastros.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarCadastrosEmTempoReal(req, res) {

    var idUser = req.params.idUser;

    console.log(`Recuperando cadastro em tempo real`);

    sobreModel.buscarCadastroEmTempoReal(idUser).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos cadastros.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function metricas(req, res) {
    sobreModel.metricas()
        .then(resultado => {
            res.json(resultado)
        })
        .catch(erro => {
            console.error(erro);
        })
}

module.exports = {
    buscarUltimosCadastros,
    buscarCadastrosEmTempoReal,
    metricas
}