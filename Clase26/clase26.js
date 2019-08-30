
class Persona{
  constructor(nombre , apellido, estatura) {
    this.nombre = nombre
    this.apellido = apellido
    this.estatura =estatura
  }
  saludar(fn){
    var {nombre, apellido}= this
    console.log(`hola me llamo: ${nombre} ${apellido} `)
    if (fn) {
      fn(nombre, apellido,)
    }
  }
  soyalto(){
    return  this.estatura > 1.60
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, estatura){
    super(nombre, nombre, estatura)
  }
  saludar(fn){
    var {nombre, apellido, estatura}= this
    console.log(`hola me llamo ${nombre} ${apellido} ${estatura} y soy Desarrollador`);
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido} `);

  if (esDev) {
    console.log(`no sabia que eras Desarrollador`);
  }
}

var kevin = new Persona('Kevin','Mayorga',1.65)
var karen = new Persona('Kevin', 'Marquez',1.60)
var jeison = new Desarrollador('Jeison','Vargas',1.82)

kevin.saludar()
karen.saludar(responderSaludo)
jeison.saludar(responderSaludo)
