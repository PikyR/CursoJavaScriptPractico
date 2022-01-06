const listaPromedio = [
  100,
  250,
  400,
  660,
];


function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;
  
  return promedioLista;
}