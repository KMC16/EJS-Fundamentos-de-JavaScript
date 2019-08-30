// var kevin = new Persona('Kevin','Mayorga',1.65)
// var karen = new Persona('Kevin', 'Marquez',1.60)
// var jeison = new Persona('Jeison','Vargas',1.82)
class Persona{
  constructor(nombre , apellido, estatura) {
    this.nombre = nombre
    this.apellido = apellido
    this.estatura =estatura
  }
  saludar(){
    console.log(`hola me llamo: ${this.nombre} ${this.apellido} `)
  }
  soyalto(){
    return  this.estatura > 1.60
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, estatura){
    super(nombre, nombre, estatura)
  }
  saludar(){
    console.log(`hola me llamos ${this.nombre} ${this.apellido} ${this.estatura} y soy Desarrollador`);
  }
}
