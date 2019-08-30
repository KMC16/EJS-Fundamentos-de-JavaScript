var kevin = new Persona('Kevin','Mayorga',1.65)
var karen = new Persona('Kevin', 'Marquez',1.60)
var jeison = new Persona('Jeison','Vargas',1.82)

function Persona(nombre , apellido, estarura) {
  this.nombre = nombre
  this.apellido = apellido
  this.estarura =estarura
}
Persona.prototype.saludar = function () {
  if (this.estarura>=1.65) {
    console.log(`hola me llamo: ${this.nombre} ${this.apellido} ${this.estarura} y soy alto`)
  }
  else {


  console.log(`hola me llamo: ${this.nombre} ${this.apellido} ${this.estarura} y soy bajo`)
}
}
kevin.saludar()
karen.saludar()
jeison.saludar()
