function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;
  
  return promedioLista;
}

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMedia(lista) {
  lista.sort(
    function (a, b) {
      return a - b;
    }
  );

  const mitadLista = parseInt(lista.length / 2);
  
  let media;

  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];
  
    const promedio = calcularMediaAritmetica([
      elemento1,
      elemento2
    ]);
  
    media = promedio;
  
  } else {
    media = lista[mitadLista];
  }

  return media;
}