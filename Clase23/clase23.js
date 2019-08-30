var kevin = new Persona('Kevin','Mayorga',1.65)
var karen = new Persona('Kevin', 'Marquez',1.60)
var jeison = new Persona('Jeison','Vargas',1.82)

function Persona(nombre , apellido, estatura) {
  this.nombre = nombre
  this.apellido = apellido
  this.estatura =estatura
}
Persona.prototype.saludar = function () {

    console.log(`hola me llamo: ${this.nombre} ${this.apellido} `)
}

Persona.prototype.soyalto = () => {
  debugger
  this.estatura > 1.60
}
