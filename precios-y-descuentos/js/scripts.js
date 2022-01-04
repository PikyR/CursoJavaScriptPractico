function calcularPrecioConDescuento(precio, descuento) {
  const porcentajeParaDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeParaDescuento) / 100; 

  return precioConDescuento;
}

