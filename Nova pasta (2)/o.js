//Jogo da Alunissagem 
//Vini Floide
//Versão 0.2.0

let canvas = document.querySelector("#jogo");
let contexto = canvas.getContext("2d");

let gravidade = 0.05;
let empuxo = -0.1;
let jogoAtivo = true;

let moduloLunar = {
    posicao: { x: 200, y: 50 },
    largura: 20,
    altura: 20,
    cor: "lightgray",
    velocidade: { x: 0, y: 0 }
}

// CONTROLE
let teclas = {};

document.addEventListener("keydown", (e) => {
    teclas[e.key] = true;
});

document.addEventListener("keyup", (e) => {
    teclas[e.key] = false;
});

function desenharFundo(){
    contexto.fillStyle = "black";
    contexto.fillRect(0, 0, canvas.width, canvas.height);
}

// CHÃO
let chaoY = canvas.height - 30;

function desenharChao(){
    contexto.fillStyle = "gray";
    contexto.fillRect(0, chaoY, canvas.width, 30);
}

function desenharModuloLunar(){
    contexto.save();
    contexto.translate(moduloLunar.posicao.x, moduloLunar.posicao.y);

    contexto.fillStyle = moduloLunar.cor;
    contexto.fillRect(
        -moduloLunar.largura/2,
        -moduloLunar.altura/2,
        moduloLunar.largura,
        moduloLunar.altura
    );

    contexto.restore();
}

function atualizar(){
    if (!jogoAtivo) return;

    // GRAVIDADE
    moduloLunar.velocidade.y += gravidade;

    // CONTROLES
    if (teclas["ArrowUp"]) {
        moduloLunar.velocidade.y += empuxo;
    }

    if (teclas["ArrowLeft"]) {
        moduloLunar.velocidade.x -= 0.05;
    }

    if (teclas["ArrowRight"]) {
        moduloLunar.velocidade.x += 0.05;
    }

    // MOVIMENTO
    moduloLunar.posicao.x += moduloLunar.velocidade.x;
    moduloLunar.posicao.y += moduloLunar.velocidade.y;

    // COLISÃO COM O CHÃO
    if (moduloLunar.posicao.y + moduloLunar.altura/2 >= chaoY) {
        moduloLunar.posicao.y = chaoY - moduloLunar.altura/2;

        if (moduloLunar.velocidade.y < 2) {
            alert("Pouso suave! 🚀");
        } else {
            alert("Você caiu! 💥");
        }

        jogoAtivo = false;
    }
}

function desenhar(){
    atualizar();

    desenharFundo();
    desenharChao();
    desenharModuloLunar();

    requestAnimationFrame(desenhar);
}

desenhar();