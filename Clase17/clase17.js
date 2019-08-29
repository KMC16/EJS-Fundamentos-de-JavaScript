var kevin ={
  nombre: 'Kevin',
  apellido: 'Mayorga',
  estarura: 1.66
}

var karen ={
  nombre: 'Karen',
  apellido: 'Marquez',
  estarura: 1.60
}

var diego ={
  nombre: 'Diego',
  apellido: 'Duarte',
  estarura: 1.66
}

var anibal ={
  nombre: 'Anibal',
  apellido: 'Atahualpa',
  estarura: 1.65
}

var personas = [kevin, karen, diego, anibal]

for (var i = 0; i < personas.length; i++) {
  var persona = personas[i]
console.log(`${persona.nombre} mide ${persona.estarura}mts`);
}
