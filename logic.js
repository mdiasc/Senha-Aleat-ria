const passwordBox = document.getElementById("senha");

const comprimento = 12;

const casoSuperior = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const casoInferior = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const simbolo = "@#$%^&*()_+~/{}{[]-=<>";

const todasAsChaves = casoSuperior + casoInferior + number + simbolo;

function criarSenha(){
    let senha = "";
    senha += casoSuperior[Math.floor(Math.random() * casoSuperior.length)];
    senha += casoInferior[Math.floor(Math.random() * casoInferior.length)];
    senha += number[Math.floor(Math.random() * number.length)];
    senha += simbolo[Math.floor(Math.random() * simbolo.length)];

    while(comprimento > senha.length){
        senha += todasAsChaves[Math.floor(Math.random() * todasAsChaves.length)];
    }
    passwordBox.value = senha;
}

function copiaSenha() {
    const senhaInput = document.getElementById('senha');
    senhaInput.select();
    document.execCommand('copy');
}