var kevin = {
  nombre: 'Kevin',
  apellido: 'Mayorga',
  estarura: 1.80
}

var karen = {
  nombre: 'Karen',
  apellido: 'Marquez',
  estarura: 1.70
}

var diego = {
  nombre: 'Diego',
  apellido: 'Duarte',
  estarura: 1.60
}

var anibal = {
  nombre: 'Anibal',
  apellido: 'Atahualpa',
  estarura: 1.50
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

console.log('Personas Altas:', personasAltas);
console.log('Personas Bajas:', personasBajas);
console.log(personascms);
