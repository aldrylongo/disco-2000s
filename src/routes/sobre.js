var express = require("express");
var router = express.Router();

var sobreController = require("../controllers/sobreController");

router.get("/ultimas/:idade", function (req, res) {
    sobreController.buscarUltimosCadastros(req, res);
});

router.get("/tempo-real/:idade", function (req, res) {
    sobreController.buscarCadastrosEmTempoReal(req, res);
})

router.get("/metricas", function (req, res) {
    sobreController.metricas(req, res);
})

module.exports = router;