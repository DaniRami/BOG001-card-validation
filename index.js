import validator from "./validator.js";
let tarjeta = document.getElementById("tarjeta"),
formulario = document.getElementById("formulario"),
logoMarca = document.getElementById("logoMarca")


  tarjeta.addEventListener("click", () =>{
    if(tarjeta.classList.contains('active')){
      tarjeta.classList.remove('active');
    }else {
      tarjeta.classList.add('active');
    }
  })
   
 


//**select del mes generado dinamicamente */
for(let i = 1; i <= 12; i++){
let opcion = document.createElement("option");
  opcion.value = i; /**aqui va cambiando por cada interraccion hasta llegar a 12, asi generamos los 12 elementos aqui en js y no directamente en html*/
  opcion.innerText = i; /**para trabajar con el texto que va ir dentro de nuestra opcion */
  formulario.selectMes.appendChild(opcion);  /**aqui accedo al id selectMes, formulario ya es uan variable definidad  y el appenchil nos permite ponerle dentro  del select mes nuestra opcion*/

}
//**select del año dinamicamente */

const yearActual = new Date().getFullYear();/**aqui esta guardado el año actual en la variable el sistema lo arroja cumpleto */
for(let i = yearActual; i <= yearActual + 8; i ++){/* i va a comezar en el año actual y le sumamos 8 para que nuestro siclo se repita o sea suma 8 años mas */
let opcion = document.createElement("option");
opcion.value = i;
opcion.innerText = i; 
formulario.selectYear.appendChild(opcion);
}



document
  .getElementById("button").addEventListener("click", tomarNumerodeTarjeta);

function tomarNumerodeTarjeta() {
  let numeroDeTarjeta = document.getElementById("inputNumber").value;
  let nombreDeTarjeta = document.getElementById("inputName").value;
  if (numeroDeTarjeta == "") {
    alert("ERROR!!.. El campo debe tener un valor numerico");
  } else {
    let valido = validator.isValid(numeroDeTarjeta);
    if(valido){
      document.getElementById("numero").innerHTML = `${validator.maskify(
        numeroDeTarjeta
      )}`;
      document.getElementById("nombre").innerHTML = nombreDeTarjeta;
      
      const imagen = document.createElement("img");
      if(numeroDeTarjeta.charAt(0) == 4){
          imagen.src = 'imagenes/visa.png';
        } else if(numeroDeTarjeta.charAt(0) == 5){
          imagen.src = "imagenes/mastercard.png";
        } else {
          imagen.src = "imagenes/banco.png";
        }
        logoMarca.appendChild(imagen);
      } else {
      alert("Tarjeta de Credito No valido");
    }
  }
}

console.log(validator);