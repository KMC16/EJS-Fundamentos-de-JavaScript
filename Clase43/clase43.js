// el this no es quien nosotros esperamos que sea
// el bind cambia el contexto del this
const kevin ={
  nombre:'Kevin Martello',
  apellido:'Mayorga Cleveland'
}

const karen ={
  nombre:'Karen ',
  apellido:'Marquez Lopez'

}

function saludar(saludo='Hola') {
  console.log(`${saludo} mi nombre es ${this.nombre}`);
}
// const saludarKevin= saludar.bind(kevin)
// const saludarKaren= saludar.bind(karen)
// setTimeout(saludar.bind(kevin,'hola quiuvo'),1000)
// saludar.call(kevin,'hola quiuvo')

saludar.apply(kevin, ['Hola,Quiuvo'])
