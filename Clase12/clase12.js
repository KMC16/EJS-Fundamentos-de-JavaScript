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

const MAYOR_DE_EDAD = 18

/*
 const esMayorDeEdad = function (persona) {
 return persona.edad >= MAYOR_DE_EDAD
} Cambiamos fuction por => que es lo mismo, quitamos los parentecias, quitamos
el return y los corcehetes
*/

//const esMayorDeEdad = persona => persona.edad >= MAYOR_DE_EDAD lo mismo que:
const esMayorDeEdad = ({edad}) => edad >= MAYOR_DE_EDAD

function ImprimirSiEsMayorDeEdad (persona){
  if (esMayorDeEdad(persona)){
    console.log(`${persona.nombre} Es Mayor de Edad `);
  }
  else {
    console.log(`${persona.nombre} No es Mayor de Edad`);
  }
}

function permitiracceso(persona){
  if (!esMayorDeEdad(persona))
  console.log('Acceso Denegado');
}
ImprimirSiEsMayorDeEdad(kevin)
