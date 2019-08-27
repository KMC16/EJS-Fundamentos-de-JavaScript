var kevin = {
   nombre: 'kevin',
   apellido: 'mayorga',
   edad: 25,
   ingeniero: true,
   cocinero: true,
   cantante: false,
   dj: true
}
function imprimirprofesiones(persona) {
  console.log(`${persona.nombre} es:`)

  if(persona.ingeniero) {
      console.log('ingeniero')
  }
  if(persona.cocineros) {
      console.log('cocinero')
  }
  if(persona.cantante) {
    console.log('cantante')
  }

  if(persona.dj) {
    console.log('Es dj')
  }

}
function mayordeedad(persona0) {
  if (persona0.edad >=18)
  console.log ('Es Mayor de Edad')


else{
  console.log('Es Menos de edad');
}
}
imprimirprofesiones(kevin)
mayordeedad(kevin)
