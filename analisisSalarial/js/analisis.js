// Helpers 
function esPar(n) {
  return (n % 2 === 0);
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorPrevio = 0, nuevoValor) {
      return valorPrevio + nuevoValor;
    }
  );

  const promedio = sumaLista / lista.length;

  return promedio;
}

// Media general

// Guardadndo los valores de los salarios en un nuevo arreglo
const salariosColombia = colombia.map(
  function (salario) {
    return salario.salary;
  }
);

// Ordenando los valores de manera ascendente
const salariosColombiaSorted = salariosColombia.sort(
  function (salaryA, salaryB) {
    return salaryA - salaryB;
  }
);

// Calculadora de media
function calcularMediaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const media1 = lista[mitad - 1];
    const media2 = lista[mitad];

    const media = calcularMediaAritmetica([media1, media2]);
    return media;
  } else {
    const media = lista[mitad];
    return media;
  }
}

const mediaGeneralSalariosColombia = calcularMediaSalarios(salariosColombiaSorted);
console.log(mediaGeneralSalariosColombia);

// Media del top 10
const spliceStart = (salariosColombiaSorted.length * 90) / 100;
const spliceCount = salariosColombiaSorted.length - spliceStart;

const salariosColombiaTop10 = salariosColombiaSorted.splice(spliceStart, spliceCount);

const mediaGeneralColombiaTop10 = calcularMediaSalarios(salariosColombiaTop10);
console.log(mediaGeneralColombiaTop10);