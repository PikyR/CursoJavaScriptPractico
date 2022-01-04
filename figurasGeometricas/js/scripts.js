// Cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
} 

function areaCuadrado(lado) {
  return lado * lado;
}

// Triángulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function alturaTriangulo(lado1, lado2, base) {
  if (lado1 === lado2 && base != lado1) {    
    const cateto = (base / 2) ** 2;
    const hipotenusa = lado1 ** 2;
    const altura = Math.sqrt(hipotenusa - cateto);
    
    return altura;    
  } else {
    return "No es un triangulo isósceles";
  }
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Círculo
const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return (radio * radio) * PI;
}

// Interaccion con HTML
// Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = Number(input.value);
  
  const area = areaCuadrado(value);
  alert(area);
}

// Triangulo
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("InputTrianguloLado1");
  const valueLado1 = Number(inputLado1.value);
  
  const inputLado2 = document.getElementById("InputTrianguloLado2");
  const valueLado2 = Number(inputLado2.value);
  
  const inputBase = document.getElementById("InputTrianguloBase");
  const valueBase = Number(inputBase.value);
  
  const perimetro= perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("InputTrianguloBase");
  const valueBase = Number(inputBase.value);
  
  const inputAltura = document.getElementById("InputTrianguloAltura");
  const valueAltura = Number(inputAltura.value);

  const area = areaTriangulo(valueBase, valueAltura);
  alert(area);
}

function calcularAlturaTriangulo () {
  const inputLado1 = document.getElementById("InputTrianguloLado1");
  const valueLado1 = Number(inputLado1.value);
  
  const inputLado2 = document.getElementById("InputTrianguloLado2");
  const valueLado2 = Number(inputLado2.value);
  
  const inputBase = document.getElementById("InputTrianguloBase");
  const valueBase = Number(inputBase.value);

  altura = alturaTriangulo(valueLado1, valueLado2, valueBase);
  alert(altura);
}

// Circulo
function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = Number(input.value);

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = Number(input.value);

  const area = areaCirculo(value);
  alert(area);
}