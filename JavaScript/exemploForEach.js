let numbers = [1,2,3];
//Estrutura de repetição utilizando o ForEach

numbers.forEach(num => {
    if(num % 2 === 0){
        console.log(num,"É par!");
    }
    else{
        console.log(num,"É ímpar!");
    }
});