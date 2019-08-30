const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'


const LukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`

const Opts = {crossDomain: true}

const onResponse = function (Luke) {
console.log(`Hola, Yo soy ${Luke.name}`)
}
$.get(LukeUrl, Opts , onResponse)
