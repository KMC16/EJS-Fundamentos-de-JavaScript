var kevin = {
  nombre:'Kevin',
  apellido:'Mayorga',
  edad: 25
}
const numeros=[1,2,3,4,5]
function esMAyorDeEdad(persona) {
  let mensaje
  if (persona.edad >= 18) {

    mensaje = 'Es Mayor de edad'

  }
  else {

      mensaje = 'Es menor de edad'
  }
  console.log(mensaje);
}

// esMAyorDeEdad(kevin)

for (var i = 0; i < 10; i++) {
console.log(i);
} 
console.log(`Termino el for, el valor de i es ${i}`);
