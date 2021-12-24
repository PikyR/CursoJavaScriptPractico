// Cuadrado
console.group("Cuadrado")

const ladoCuadrado = 5;
console.log(`Lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);

const aereaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${aereaCuadrado} cm²`)
console.groupEnd();

// Triángulo
console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);
console.log(`La altura del triángulo es: ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del triángulo es: ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es ${areaTriangulo}cm²`);
console.groupEnd();

// Círculo
console.group("Círculo");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
console.log(`Radio del círculo: ${radioCirculo}cm`);
console.log(`Diámetro del círculo: ${diametroCirculo}cm`);
console.log(`Valor de PI: ${PI}`);

const perimetroCirculo = diametroCirculo * PI;
console.log(`Perímetro del círculo: ${perimetroCirculo}cm`);

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`Área del círculo: ${areaCirculo}cm²`);

console.groupEnd();