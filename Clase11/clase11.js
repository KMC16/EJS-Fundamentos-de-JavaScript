var kevin = {
   nombre: 'kevin',
   apellido: 'mayorga',
   edad: 18,
   ingeniero: true,
   cocinero: true,
   cantante: false,
   dj: true
}
var karen = {
 nombre: 'Karen',
 apellido: 'Marquez',
 edad: 17,
 ingeniero: false,
 cocinero : true,
 cantante : false,
 dj : false
}
var colombia = 18
var usa = 21
var italia =21
var españa = 18

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

function MayorEdadPais(persona) {
  console.log(`${persona.colombia}`)

}
//imprimirprofesiones(kevin)
MayorEdadPais(kevin)
