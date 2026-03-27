function validar(){

let idade = document.getElementById("idade").value
let resultado = document.getElementById("resultado")
let barra = document.getElementById("progresso")

if(idade === ""){
resultado.innerHTML = "Digite uma idade!"
resultado.style.color = "red"
barra.style.width = "0%"
return
}

idade = Number(idade)

if(idade < 0 || idade > 130){
resultado.innerHTML = "Idade inválida"
resultado.style.color = "red"
barra.style.width = "10%"
return
}

if(idade < 12){
resultado.innerHTML = "Você é uma criança"
resultado.style.color = "green"
barra.style.width = "25%"
}

else if(idade < 18){
resultado.innerHTML = "Você é um adolescente"
resultado.style.color = "green"
barra.style.width = "50%"
}

else if(idade < 60){
resultado.innerHTML = "Você é um adulto"
resultado.style.color = "green"
barra.style.width = "75%"
}

else{
resultado.innerHTML = "Você é um idoso"
resultado.style.color = "green"
barra.style.width = "100%"
}

}