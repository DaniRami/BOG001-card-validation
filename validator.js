const validator = {
  isValid: (creditCardNumber) => { /* aqui esta el numero detarjeta a validar en el algoritmo de lunh*/
    
    let arrayNumeros = creditCardNumber.split("").reverse();/** se hace el cambio de posiciones para que el arrayde numeros quede en orden inverso */
    var acumulador = 0; /** esta variable nos sirve para ir acomulando el valor de todos nuestros calculos */
    var contArray = 1;  /**esta variable  contador nos sirve para saber en posicion del arreglo estamos */
    arrayNumeros.forEach(number => { /** se recorre cada una de las posiciones del arreglo de numeros */
      let esPar = (contArray % 2); /**se hace mudulo de 2 de la posicion del numero par */
      if (esPar == 0) { /**se valida si es cero es par */
        let valorTemporal = (Number(number)*2); /**se multiplica el numero por dos */
        if (valorTemporal >= 10) { /** se valida si el resultado anterior es mayor o igual a 10 */
          let tempValueString = valorTemporal.toString(); /** se convierte el resultado de la multiplicacion a string */
          let arrayDigitos = tempValueString.split(""); /** se divide el numero que es mayor o igual a 10 en digitos ejemplo 10 (1,0) */
          let valorCalculo = 0; /** esta variable se crea  para guardar la suma de los digitos */
          arrayDigitos.forEach((digito) => { /** recorre  cada uno de los digitos del numero para sumarlos en valor calculado */
            valorCalculo += Number(digito); 
          });
          acumulador +=  valorCalculo; /**se  acumula el valor en el acomulador del valor calculado anteriormente */
        } else {
          acumulador += valorTemporal; 
        }
      } else {
        acumulador += Number(number);
      }
      contArray++;
    });
    return ((acumulador % 10) == 0);
  },
  maskify: (creditCardNumber) => {
    let tamano = creditCardNumber.length;

    if(tamano > 4){
      let ultimosCuatro = creditCardNumber.slice(-4);

      let cadena = "#" 

      let numerosEnmascarados = cadena.repeat(tamano - 4)
      
      return numerosEnmascarados + ultimosCuatro;
    
    }else {
      
      return creditCardNumber;

    }
  },
};

export default validator;
