function urna(){
    let candidato_a = 0;
    let candidato_b = 0;
    let branco = 0;
    let nulos = 0;
    let total = 0;
    let porcent_cand_a;
    let porcent_cand_b;
    let porcent_brancos;
    let porcent_nulos;
    let voto;
    do{
       voto = prompt("Escolha seu candidato ou tecle zero para encerrar\n" +
            "   1 -> Candidato A\n"  +  
            "   2 -> Candidato B\n"  +
            "   3 -> Branco\n"  +
            "\nQualquer número diferente de 0, 1, 2 e 3 anulará seu voto\n" +
        "Digite seu voto: ");
        if( voto == "0" ){
            alert("Votação encerrada")
        } else if ( voto == "1" ){ // CORRIGIDO (= → ==)
            ++candidato_a;
        } else if ( voto == "2"){
            ++candidato_b;
        } else if( voto == "3"){
            ++branco; // CORRIGIDO (nome da variável)
        } else { // CORRIGIDO (condição de nulo)
            ++nulos;
            alert("Votos nulos: " + nulos);
        }
    }while( voto != "0"); // CORRIGIDO (comparar com string)
 
    total = candidato_a + candidato_b + branco + nulos;
 
    porcent_cand_a = (candidato_a / total) * 100;
    porcent_cand_b = (candidato_b / total) * 100;
    porcent_brancos = (branco / total) * 100;
    porcent_nulos = (nulos / total) * 100;
 
    alert(
        "Candidato A: " + porcent_cand_a.toFixed(2) + "%\n" +
        "Candidato B: " + porcent_cand_b.toFixed(2) + "%\n" +
        "Brancos: " + porcent_brancos.toFixed(2) + "%\n" +
        "Nulos: " + porcent_nulos.toFixed(2) + "%"
    );
}