const objetos = [
  {
    note: 5,
    credit: 3,
  },
  {
    note: 2,
    credit: 4,
  },
  {
    note: 8,
    credit: 6,
  },
  {
    note: 9,
    credit: 3,
  },
];

function calcularMediaPonderada(objetos) {
  const notaPorCredito = objetos.map(
    function (objeto) {
      return objeto.note * objeto.credit;
    }
  );
  
  const sumaNotasPorCreditos = notaPorCredito.reduce(
    function (acumulador = 0, nuevoElemento) {
      return acumulador + nuevoElemento;
    }
  );
    
  const creditos = objetos.map(
    function (objeto) {
      return objeto.credit;
    }
  );
  
  const sumaCreditos = creditos.reduce (
    function (acumulador = 0, nuevoElemento) {
      return acumulador + nuevoElemento;
    }
  );
  
  const mediaPonderada = sumaNotasPorCreditos / sumaCreditos;
  return mediaPonderada;
}