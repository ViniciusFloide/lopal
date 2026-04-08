  const  numeros = [45, 4 , 9, 16, 25]
 
/*for( i = 0; i < 5; i++){
    console.log(numeros[i]);
}*/
 
//forEach() é um método que aplica uma função callback
//a cada elemento ele muda
numeros.forEach(valor => console.log(valor));
 
/*for( i = 0; i < 5; i++){
    console.log(numeros[i] * 2);
}*/
 
//map() é um metodo que cria um novo array cm elementos
//retornados por uma callback function

const numeros2 = numeros.map(valor =>  valor * 2);
numeros2.forEach(valor => console.log(valor));
 
//filter() é um metodo que retorna um novoi array com
//elementos que atende a um determinado criterio
 
const numeros3 = numeros.filter(valor => valor > 18)
numeros3.forEach(valor => console.log(valor));

//reduce() produz um unico valor
 
console.log(
    numeros.reduce((total, valor) => total + valor)
);
//A propriedade leght retorna um numero correspondente à quantiodde
//de elementos de um array 
console.log(numeros.lenght);
numeros.length = 10;
console.log(numeros);
console.log(numeros[6]);
numeros.legth = 4;
console.log(numeros);
numeros.length = 5;
console.log(numeros);

// o metodo push() acrescenta um valor no fim do array
numeros.push(25);
console.log(numeros);

//O método pop() remove um elemento no fim do array
numeros.pop();
console.log(numeros);

numeros.pop();
numeros.push(25);
console.log(numeros);
