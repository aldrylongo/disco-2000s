var express = require("express");
var router = express.Router();

var postController = require("../controllers/postController");

router.get("/", function (req, res) {
    postController.testar(req, res);
});

router.get("/listar", function (req, res) {
    postController.listar(req, res);
});

router.get("/listar/:idUser", function (req, res) {
    postController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    postController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUser", function (req, res) {
    postController.publicar(req, res);
});

router.put("/editar/:idPost", function (req, res) {
    postController.editar(req, res);
});

router.delete("/deletar/:idPost", function (req, res) {
    postController.deletar(req, res);
});

module.exports = router;