var persona0 ={
  nombre: 'Kevin',
  apellido: 'Mayorga',
  edad: 25

}
var persona1 ={

  nombre: 'Karen',
  apellido: 'Marquez',
  edad: 24

}


function imprimirNombreEnMayusculas(n) {
  //ver nombre = n.nombre
  var {nombre} = n
  console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad(ne) {
  var edad = ne.edad
  var nombre = ne.nombre
  console.log('hola me llamo', nombre, 'y tengo', edad , 'años' )
}

imprimirNombreEnMayusculas(persona0)
imprimirNombreEnMayusculas(persona1)
imprimirNombreYEdad(persona0)
