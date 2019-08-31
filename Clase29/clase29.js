const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'



const Opts = {crossDomain: true}

const onResponse = function (persona) {
console.log(`Hola, Yo soy ${persona.name}`)
}

for (var i = 1; i <= 10; i++) {
  i
  obtenerPersonaje(i)
}
function obtenerPersonaje(id) {
  const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`
  $.get( url, Opts , onResponse)
}
