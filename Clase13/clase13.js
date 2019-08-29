var kevin ={
nombre : 'Kevin Martello',
apellido: 'Mayorga Cleveland',
edad : 28,
peso: 80
}

console.log(`Al inicio del año ${kevin.nombre} pesa ${kevin.peso} Kg.`);
const INCREMENTO_PESO = 0.2
const aumentrarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -=  INCREMENTO_PESO
// Dentro de los () inicial, condicion, incremento y dentro {} El codigo que se repita cada vez
for (var i = 1; i <= 365; i++ ){
 var random = Math.random()
    if (random < 0.25){
      aumentrarDePeso(kevin)
      //Aumenta de Peso
    } else if (random < 0.5){
      aumentrarDePeso(kevin)
      //Baja de Peso
    }
  }






console.log(`Al final del año ${kevin.nombre} pesa ${kevin.peso.toFixed(2)} Kg.`);
