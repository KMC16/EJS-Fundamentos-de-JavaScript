/*
El Closures recuerda el estado de las cosas cuando fue invocada.

*/
function crearSaludo(finalDeFrase) {
  return function (nombre) {
    console.log(`hola ${nombre} ${finalDeFrase}`);
  }
}

const saludoArgentido= crearSaludo('Che')
const saludoMexicano= crearSaludo('Guey')
const saludoColombiano= crearSaludo('Quiuvo')

saludoArgentido('Kevin')// hola kevin Che
saludoMexicano('Kevin')// hola kevin guey
saludoColombiano('Kevin')// hola kevin Quiuvo
