var kevin ={
nombre : 'Kevin Martello',
apellido: 'Mayorga Cleveland',
edad : 28,
peso: 80
}

console.log(`Al inicio del año ${kevin.nombre} pesa ${kevin.peso} Kg.`);
const INCREMENTO_PESO = 0.3
const NUMERO_DE_DIAS = 365
const aumentrarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -=  INCREMENTO_PESO
const META = kevin.peso -10
const comeMucho = () => Math.random() < 0.30
const realizaDeporte = () => Math.random() < 0.4
var dias = 0

while (kevin.peso > META) {
  //debugger
  if (comeMucho()) {
    //Aumenttar de peso
    aumentrarDePeso(kevin)
  }
if (realizaDeporte()) {
  // Adelgazar
  adelgazar(kevin)
}
 dias += 1
}
console.log(`Pasaron ${dias} dias hasta que ${kevin.nombre} bajo de peso en 10Kg`);
