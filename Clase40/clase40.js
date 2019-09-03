/*
Nuermo Factoria
!6= 1*2*3*4*5*6=720
!12=1*2*3*4*5*6*7*8*9*10*11*12
----------------------------//--------------------------------
Al realizar el factoria de 12 tambien estamos realizando el factorial de 6 entonces
lo ideal es saber como poder guardar dentro de la meomoria el factoria de 6 para poder
ahorrar meoria de calculo en el proceso de sacar el factoria de 12

*/
function factoria(n) {
if (!this.cache){
  this.cache ={}
}

if (this.cache[n]){
  return this.cache[n]
}
  if (n===1) {
    return 1
}
this.cache[n]=n* factoria(n-1)

return this.cache[n]
}
