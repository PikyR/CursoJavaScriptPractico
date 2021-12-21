// VARIABLES Y OPERACIONES

let nombre = "Pky";
let apellido = "Rms";
let usser = "piky";
let edad = 32;
let email = "coso@coso.com";
let mayorEdad = true;
let dineroAhorrado = 100;
let deudas = 10;

let nombreCompleto = nombre + " " + apellido;

let dineroReal = dineroAhorrado - deudas;


// FUNCIONES

function datosPersonales(nombre, apellido, nick) {
  const nombreCompleto = nombre + " " + apellido;
  console.log("Mi nombre es " + nombreCompleto + ", pero me llaman " + nick + ".");
}

datosPersonales("Pky", "Rms", "Pekilobo");


// CONDICIONALES

const tipoSuscripcion = "Basic";

if (tipoSuscripcion == "free") {
  console.log("Solo cursos gratis");
} else if (tipoSuscripcion == "Basic") {
  console.log("Puedes tomar cursos por un mes");
} else if (tipoSuscripcion == "Expert") {
  console.log("Puedes tomar cursos por un año");
} else if (tipoSuscripcion == "ExpertPlus") {
  console.log("Todos los cursos para dos, por un año");
}


// CICLOS
let i = 0;
while (i < 5) {
  console.log("Valor de i: " + i);
  i++;
}

let j = 10;
while (j >= 2) {
  console.log("Valor de i: " + j);
  j--;
}

let respuesta;
do {
  respuesta = prompt("Cuanto es 2 + 2?")
} while (respuesta != "4");
if (respuesta == 4) {
  console.log("Kpo!");
}


// LISTAS
const lista = ["primero", "segundo", "tercero", "cuartro", "quinto"];

function imprimirPrimerElemento(arreglo) {
  console.log(arreglo[0]);
}

function imprimirTodo(arreglo) {
  for (const elemento of arreglo) {
    console.log(elemento);
  }
}

const objeto = {
  nombre: "pky",
  apellido: "Rms",
  edad: 31
}

function imprimirObjeto(miObjeto) {
  console.log(miObjeto.nombre);
  console.log(miObjeto.apellido);
  console.log(miObjeto.edad);
}