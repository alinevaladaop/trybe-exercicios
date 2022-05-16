let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultadoSoma = 10;

for (let index = 0; index < numbers.length; index +=1){
    resultadoSoma = resultadoSoma + (numbers[index]);
}

console.log (resultadoSoma / numbers.length);

if(resultadoSoma > 20){
    console.log ("valor maior que 20")
}else{
    console.log ("valor menor ou igual a 20")
}