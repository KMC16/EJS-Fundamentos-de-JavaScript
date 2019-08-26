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


function imprimirNombreEnMayusculas({nombre}) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(persona0)
imprimirNombreEnMayusculas(persona1)
imprimirNombreEnMayusculas({nombre:'pepito'})
