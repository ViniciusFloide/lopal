//Jogo da Alunissagem 
//Vini Floide
//08/04/2026
//Versão 0.2.0

/** @type {HTMLCanvasElement} */

let canvas = document.querySelector("#jogo");
let contexto = canvas.getContext("2d");

let moduloLunar = {
    posicao: { 
        x: 0,
        y: 0 
    },
    angulo: -Math.PI/2,
    largura: 20,
    altura: 20,
    cor: "lightgray",
    velocidade: { 
        x: -0.5,
        y: 0 
    },
    motorLigado: false,
    combustivel: 1000,
    rotacaoHorario: false,
    rotacaoAntiHorario: false
}

// começa no canto superior direito
moduloLunar.posicao.x = canvas.width - moduloLunar.largura / 2;
moduloLunar.posicao.y = moduloLunar.altura / 2;

let jogoAtivo = true;
let mensagemFinal = "";

// mostrar VELOCIDADE
function mostrarVelocidade(){
    contexto.font = "bold 18px Arial";
    contexto.fillStyle = "lightgray";

    contexto.fillText(
        `Vel X: ${moduloLunar.velocidade.x.toFixed(2)}`,
        50,
        60
    );

    contexto.fillText(
        `Vel Y: ${moduloLunar.velocidade.y.toFixed(2)}`,
        50,
        80
    );
}

// mostrar COMBUSTÍVEL
function mostrarCombustivel(){
    contexto.font = "bold 18px Arial";
    contexto.fillStyle = "lightgray";

    contexto.fillText(
        `Combustível: ${(moduloLunar.combustivel / 10).toFixed(0)}%`,
        50,
        110
    );
}

// FUNDO
function desenharFundo(){
    contexto.clearRect(0, 0, canvas.width, canvas.height)
    contexto.fillStyle = "#000";
    contexto.fillRect(0,0, canvas.width, canvas.height);
}

function desenharModulo(){
    contexto.save();
    contexto.translate(moduloLunar.posicao.x, moduloLunar.posicao.y);
    contexto.rotate(moduloLunar.angulo);
    contexto.fillStyle = moduloLunar.cor;
    contexto.fillRect(
        -moduloLunar.largura/2,
        -moduloLunar.altura/2,
        moduloLunar.largura,
        moduloLunar.altura
    );

    // chama
    if(moduloLunar.motorLigado && moduloLunar.combustivel > 0){
        desenharChama();
        moduloLunar.combustivel--;
    }

    contexto.restore();
}

// chama
function desenharChama(){
    contexto.beginPath();

    contexto.moveTo(-moduloLunar.largura/2, -5);
    contexto.lineTo(-moduloLunar.largura/2, 5);
    contexto.lineTo(
        -moduloLunar.largura/2 - (10 + Math.random()*20),
        0
    );

    contexto.closePath();
    contexto.fillStyle = "orange";
    contexto.fill();
}

// RESULTADO
function mostrarResultado(){
    contexto.font = "bold 40px Arial";
    contexto.textAlign = "center";
    contexto.fillStyle = "white";

    contexto.fillText(
        mensagemFinal,
        canvas.width * 0.5,
        canvas.height * 0.5
    );
}

function desenhar(){

    if(!jogoAtivo){
        desenharFundo();
        mostrarResultado();
        return;
    }

    atracaoGravitacional();

    // rotação
    if(moduloLunar.rotacaoHorario){
        moduloLunar.angulo += 0.05;
    }
    if(moduloLunar.rotacaoAntiHorario){
        moduloLunar.angulo -= 0.05;
    }

    // chão
    if(moduloLunar.posicao.y + moduloLunar.altura/2 >= canvas.height){
        moduloLunar.posicao.y = canvas.height - moduloLunar.altura/2;

        if(moduloLunar.velocidade.y <= 0.5){
            mensagemFinal = "Você pousou com sucesso";
        } else {
            mensagemFinal = "Você impactou o solo";
        }

        jogoAtivo = false;
    }

    desenharFundo();
    desenharModulo();
    mostrarVelocidade();
    mostrarCombustivel();

    requestAnimationFrame(desenhar);
}

// controle
document.addEventListener('keydown', (evento)=>{
    if(evento.key === "ArrowUp" && moduloLunar.combustivel > 0){
        moduloLunar.motorLigado = true;
    }
    if(evento.key === "ArrowRight"){
        moduloLunar.rotacaoHorario = true;
    }
    if(evento.key === "ArrowLeft"){
        moduloLunar.rotacaoAntiHorario = true;
    }
});

document.addEventListener('keyup', (evento)=>{
    if(evento.key === "ArrowUp"){
        moduloLunar.motorLigado = false;
    }
    if(evento.key === "ArrowRight"){
        moduloLunar.rotacaoHorario = false;
    }
    if(evento.key === "ArrowLeft"){
        moduloLunar.rotacaoAntiHorario = false;
    }
});

// gravidade
const gravidade = 0.01;

function atracaoGravitacional(){

    // movimento
    moduloLunar.posicao.x += moduloLunar.velocidade.x;
    moduloLunar.posicao.y += moduloLunar.velocidade.y;

    // gravidade
    moduloLunar.velocidade.y += gravidade;

    // motor com ângulo 🚀
    if(moduloLunar.motorLigado && moduloLunar.combustivel > 0){
        moduloLunar.velocidade.x += Math.cos(moduloLunar.angulo) * 0.03;
        moduloLunar.velocidade.y += Math.sin(moduloLunar.angulo) * 0.03;
    }
}

// iniciar jogo
desenhar();