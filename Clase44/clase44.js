// EL punto y como el dolor de cabeza en js, hace falta ponerlo o si
// el punoto coma es opcional pero hay casos donde es obligatorio usarlo

/*--------------------------------------//---------------------------------
No es necesario poner el Punto y Coma ; en las siguientes:
*/
alert('Hola')
var nombre = 'Kevin'
const saludarKevin = function functionName() {
  console.log()
}
for (var i = 0; i < 1; i++) {
  i
};//<---- no es necesario ponerlos

/*-------------------------------------------------------//-----------------------------------
Casos en donde es necesario el Punto y Coma */
console.log('Hola mi nombre es kevin');//<-- Sin este punto y como nos genera error en la consola
[1,2,3].forEach(n=>console.log(n*2))
// cuando hacemosun return no podemos dejar un salto de linea

function saludo() {
  return
  {//<---- si dejamos el { con un salto de linea nos genera un error en la cosnola.

  }
}
