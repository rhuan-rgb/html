const tamanho = 10;

let numeros = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < numeros.length; i++){
    let num = numeros[i];
    if (num % 2 === 0){
        console.log(num+" É par!");
    }
    else{
        console.log(num+" É impar!");
    }
}

