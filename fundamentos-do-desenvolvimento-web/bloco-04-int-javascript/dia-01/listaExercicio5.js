//triangulo valido = soma dos tres lados 180
//angulo invalido = valor negativo

const angulo1 = 30;
const angulo2 = 40;
const angulo3 = 120;

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log ("erro")
} else {    
    const triangulo = angulo1 + angulo2 + angulo3

    if (triangulo === 180){
        console.log (true)
    }else{
        console.log (false)
    }
}



