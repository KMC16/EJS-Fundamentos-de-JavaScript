// var kevin = new Persona('Kevin','Mayorga',1.65)
// var karen = new Persona('Kevin', 'Marquez',1.60)
// var jeison = new Persona('Jeison','Vargas',1.82)

function heredaDe( prototipoHijo, prototipoPadre) {
var fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}
function Persona(nombre , apellido, estatura) {
  this.nombre = nombre
  this.apellido = apellido
  this.estatura =estatura
}
Persona.prototype.saludar = function () {

    console.log(`hola me llamo: ${this.nombre} ${this.apellido} `)
}

Persona.prototype.soyalto = function () {
return  this.estatura > 1.60
}

function Desarrollador (nombre, apellido, estatura){
  this.nombre =nombre
  this.apellido =apellido
  this.estatura =estatura
}


heredaDe(Desarrollador , Persona)
Desarrollador.prototype.saludar = function () {
  console.log(`hola me llamos ${this.nombre} ${this.apellido} ${this.estatura} y soy Desarrollador`);
}
