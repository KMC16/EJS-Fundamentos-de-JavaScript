const kevin ={
  nombre: 'Kevin Martello',
  apellido: 'Martello Mayorga',
  edad : 25
}

// const cumpleaños = persona => persona.edad++
const cumpleaños2 = persona =>({
  ...persona,
  edad: persona.edad +1
})
