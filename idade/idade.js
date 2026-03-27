function idade (){

    let idade;
    do{
        idade = parseInt(prompt("Informe a sua idade (valores aceitos de 5 a 150): "));
    }while(idade < 5 || idade > 150 || Number.isNan(idade) );
    alert("Idade válida.");

}