import validator from "./validator.js";

let tarjeta = document.getElementById("tarjeta"),
  formulario = document.getElementById("formulario"),
  logoMarca = document.getElementById("logoMarca")


tarjeta.addEventListener("click", () => {
  if (tarjeta.classList.contains('active')) {
    tarjeta.classList.remove('active');
  } else {
    tarjeta.classList.add('active');
  }
})




//**select del mes generado dinamicamente */

for (let i = 1; i <= 12; i++) {
  let opcion = document.createElement("option");
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectMes.appendChild(opcion);

}
//**select del año dinamicamente */

const yearActual = new Date().getFullYear();/**aqui esta guardado el año actual en la variable el sistema lo arroja cumpleto */
for (let i = yearActual; i <= yearActual + 8; i++) {
  let opcion = document.createElement("option");
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectYear.appendChild(opcion);
}

function loadModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

myModal.addEventListener("click", () => {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
})




document.getElementById("button").addEventListener("click", tomarNumerodeTarjeta);

function tomarNumerodeTarjeta() {
  let numeroDeTarjeta = document.getElementById("inputNumber").value;
  let nombreDeTarjeta = document.getElementById("inputName").value;
  if (numeroDeTarjeta == "") {
    loadModal()
  } else {
    let valido = validator.isValid(numeroDeTarjeta);
    if (valido) {
      document.getElementById("numero").innerHTML = `${validator.maskify(
        numeroDeTarjeta
      )}`;
      document.getElementById("nombre").innerHTML = nombreDeTarjeta;
      const imagen = document.createElement("img");
      if (numeroDeTarjeta.charAt(0) == 4) {
        imagen.src = 'imagenes/visa.png';
      } else if (numeroDeTarjeta.charAt(0) == 5) {
        imagen.src = "imagenes/mastercard.png";
      } else {
        imagen.src = "imagenes/banco.png";
      }
      logoMarca.appendChild(imagen);
    } else {
      loadModal()
    }
  }
}

console.log(validator);









