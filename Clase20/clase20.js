var kevin = {
  nombre: 'Kevin',
  apellido: 'Mayorga',
  estarura: 1.80,
  cantidadDeLibros:80
}

var karen = {
  nombre: 'Karen',
  apellido: 'Marquez',
  estarura: 1.70,
  cantidadDeLibros:90
}

var diego = {
  nombre: 'Diego',
  apellido: 'Duarte',
  estarura: 1.60,
  cantidadDeLibros:100
}

var anibal = {
  nombre: 'Anibal',
  apellido: 'Atahualpa',
  estarura: 1.50,
  cantidadDeLibros:110
}
const esAlta = persona => persona.estarura > 1.6

var personas = [kevin, karen, diego, anibal]
var personasAltas = personas.filter(esAlta)

const esBaja = persona => persona.estarura <= 1.6

var personas = [kevin, karen, diego, anibal]
var personasBajas = personas.filter(esBaja)

const estaruraencm = persona => ({
    ...persona,
    estatura: persona.estarura * 100
  })

var personascms = personas.map(estaruraencm)

/* Esta es una manera de hacerlo
var acum = 0

for (var i = 0; i < personas.length; i++) {
 acum = acum + personas[i].cantidadDeLibros
}
console.log(`En total todos tienen ${acum} libros`);
*/

const reducer = (acum,personas)=> acum + personas.cantidadDeLibros
var totalDeLibros = personas.reduce(reducer,0)


console.log(`En total todos tienen ${totalDeLibros} libros`);
console.log('Personas Altas:', personasAltas);
console.log('Personas Bajas:', personasBajas);
console.log(personascms);
