// sessão
function validarSessao() {
    // aguardar();

    var user = sessionStorage.USER_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var user_usuario = document.getElementById("user_usuario");
    var nome_usuario = document.getElementById("nome_usuario");

    if (user != undefined && nome != undefined) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        user_usuario.innerHTML = user;
        nome_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        user_usuario.innerHTML = "verificar";
        nome_usuario.innerHTML = "verificar";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

