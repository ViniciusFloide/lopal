function callback(){
    let minhaFunc = (num1, num2, operacao ) => {
        return operacao (num1, num2);
    }
    //operacao = (a, b) => (a + b)
    const calcular = (a, b) => {return a % b} 

    console.log(minhaFunc(num1 = 2,num2 = 3, operacao = calcular));
}
callback();