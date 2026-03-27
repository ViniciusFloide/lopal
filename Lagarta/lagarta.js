async function lagarta(){
    let lagarta = "()()(00)";
    let espaco = " ";

    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    for (let i = 0; i < 40; i++){

        console.clear();
        console.log(espaco + "( )( )(00)");
        await sleep(600);

        console.clear();
        console.log(espaco + "()()(00)");
        await sleep(600);

        espaco += " ";
    }
}
lagarta();