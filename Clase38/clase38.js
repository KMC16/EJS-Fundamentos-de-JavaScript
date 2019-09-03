var kevin = {
  nombre:'Kevin',
  apellido:'Mayorga',
  edad: 25
}
function diasEntreFechas(fecha1,fecha2) {
  const diferencia = Math.abs (fecha1 - fecha2)
  const unDia= 1000*60 *60 *24
  return Math.floor(diferencia/ unDia)
  console.log(diferencia);
}
const hoy = new Date()
const nacimiento = new Date(1994,1,16)
