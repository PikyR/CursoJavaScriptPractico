const cupons = [
  {
    name: "cupon10",
    discount: 10
  },
  {
    name: "cupon30",
    discount: 30
  },
  {
    name: "cupon50",
    discount: 50
  },
  {
    name: "cupon100",
    discount: 100
  }
];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajeParaDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeParaDescuento) / 100; 

  return precioConDescuento;
}

function onClickCalculateFinalPrice() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = Number(inputPrice.value);
  
  const inputCupon = document.getElementById("InputCupon");
  const cuponValue = inputCupon.value;

  const isCuponValueValid = function(cupon) {    
    return cupon.name === cuponValue;
  };
 
  const userCupon = cupons.find(isCuponValueValid);

  if (!userCupon) {
    alert("Error")
  } else {
    const discount = userCupon.discount;
    
    const finalPrice = calcularPrecioConDescuento(priceValue, discount);

    const finalPriceP = document.getElementById("FinalPriceP");
    finalPriceP.innerText = "Priecio final $" + finalPrice;
  }  
}