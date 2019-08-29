var signo = prompt('Cual es tu signo')

console.log(signo);
switch (signo) {
  case 'Aries':
  case 'aries':
    console.log('No se detenga en el camino y anímese a lo desconocido. Será un día donde tendrá su mente relajada y con deseos de conocer nuevos rumbos para su vida.');
    break;
  case 'Tauro':
  case 'tauro':
    console.log('Ponga más atención a los sueños que está teniendo últimamente por las noches. Pronto lo conectará con sus más profundos anhelos en su vida personal.');
    break;
  case 'Géminis':
  case 'Geminis':
  case 'geminis':
  case 'géminis':
    console.log('Hoy resuelva sobre la marcha esas situaciones nuevas que salgan a luz. Sepa que parte de sus futuras conquistas amorosas dependerán de su creatividad');
    break;
  case 'Cáncer':
  case 'Cancer':
  case 'cáncer':
  case 'cancer':
    console.log('Aproveche, ya que será una jornada en la que podrá exponer su vitalidad e inteligencia en todo lo que emprenda. No dude y ponga en marcha esos proyectos postergados.');
    break;
  case 'Leo':
  case 'leo':
    console.log('Será una jornada donde podrá luchar para conseguir todo lo que desea hace tiempo y obtenerlo sin inconvenientes. No permita que se escape ninguna oportunidad.');
    break;
  case 'Virgo':
  case 'virgo':
    console.log('Durante el día, sepa que con su vitalidad y pasión logrará llevar a buen término los proyectos que muchos de su entorno creían irrealizables por usted.');
    break;
  case 'Libra':
  case 'libra':
    console.log('Por más que se sienta presionado por las situaciones que vive, su habilidad le permitirá esquivar cualquier dificultad que se le presente en la jornada.');
    break;
  case 'Escorpio':
  case 'escorpio':
    console.log('Debería tener en cuenta las diferentes señales que se le presenten en el día. Muchas de ellas contendrán la clave que orientará su futuro próximo.');
    break;
  case 'Sagitario':
  case 'sagitario':
    console.log('Recuerde no dejar para mañana la propuesta que quiere hacerle hoy a esa persona que hace tiempo no ve. Es hora de que empiece a actuar sin demorarse.');
    break;
  case 'Capricornio':
  case 'capricornio':
    console.log('Deje de temerle al esfuerzo y sea más responsable en la vida. Debería tener presente que los logros muchas veces suelen tardar y requieren de mayor constancia.');
    break;
  case 'Acuario':
  case 'acuario':
    console.log('Vivirá una etapa especial donde deberá ordenar cada uno de los pensamientos. Intente tomarse un tiempo esencial para elaborar cada una de sus ideas.');
    break;
  case 'Piscis':
  case 'piscis':
    console.log('Seguramente las obligaciones cotidianas lo superarán demasiado, evite caer en la desesperación. Paso a paso logrará concluir con todas las tareas que se propuso.');
    break;
default:
console.log('Signo mal ingresado');
break
}
