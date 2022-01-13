const salariosColombia = colombia.map(
  function (salario) {
    return salario.salary;
  }
);

const salariosColombiaSorted = salariosColombia.sort(
  function (salaryA, salaryB) {
    return salaryA - salaryB;
  }
);

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

console.log(calcularMediaSalarios(salariosColombiaSorted));