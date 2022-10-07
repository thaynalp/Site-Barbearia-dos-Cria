/*const $remove_button = document.querySelectorAll(".btn-danger");
const $quantity_act = document.querySelectorAll(".cart-quantity-input");
const $cart_button = document.querySelectorAll(".card-button");
const $comprar_button = document.querySelector(".btn-purchase");
*/
document.addEventListener("click",()=>{
if(event.target.matches(".btn-danger")){
Remover();
}
if(event.target.matches(".card-button")){
 Add_Cart();
  }
  if(event.target.matches(".btn-purchase")){
   Comprar();
     }
});
/********************************Funciones*********************************************/
//Funcion para actualizar cuando se cambia un valor en el carro de compras
const Quantity_Change = () => {
  if (isNaN(event.target.value) || event.target.value >= 1) {
    Actualiza_Total();
  } else {
    event.target.value = 1;
  }
};

//Funcion para actualizar el total en el Carro de Compras
const Actualiza_Total = () => {
  let total = 0;
  const $cart_row = document.querySelectorAll(".cart-items .cart-row");
  for (let index = 0; index < $cart_row.length; index++) {
    const $cart_precio = $cart_row[index].querySelector(".cart-price");
    let cantidad = $cart_row[index].querySelector(".cart-quantity-input").value;
    let precio = parseFloat($cart_precio.innerHTML.replace("R$ ", ""));
    total = total + precio * cantidad;
  }
  total = Math.round(total * 100) / 100;
  document.querySelector(".cart-total-price").innerHTML = `R$ ${total}`;
};

//Funcion para Dibujar dentro de la zona del Cart
const Dibujar_Cart = (titulo_elemento, precio_elemento) => {
  let card_row = document.createElement("div");
  card_row.classList.add("cart-row");
  let item = `<div class="cart-item cart-column">
            <span class="cart-item-title">${titulo_elemento}</span>
          </div>
          <span class="cart-price cart-column">${precio_elemento}</span>
          <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" min="1" max="20" />
            <button class="button btn-danger" type="button">REMOVE</button>
          </div>`;
  card_row.innerHTML = item;
  let $cart_items = document.querySelector(".cart-items");
  $cart_items.appendChild(card_row);
  //Despues que dibujo el elemento debo anadir los eventos del boton remove y del input puesto que los eventos se cargaron previamente
  /*card_row.querySelector(".btn-danger").addEventListener("click", () => {
    event.target.parentElement.parentElement.remove();
    Actualiza_Total();
  }
);*/

  card_row
    .querySelector(".cart-quantity-input")
    .addEventListener("change", Quantity_Change);
};

//Funcion para Anadir al Cart
const Add_Cart = () => {
  let elemento = event.target.parentElement.parentElement;
  let titulo_elemento = elemento.querySelector("h1").innerText;
  let precio_elemento = elemento.querySelector(".price").innerText;
  let imagen_elemento = elemento.querySelector("img").src;
  let $nombres = document.querySelectorAll(".cart-item-title");
  for (let index = 0; index < $nombres.length; index++) {
    if ($nombres[index].innerHTML === titulo_elemento) {
      alert("O item já foi adicionado ao carrinho");
      return;
    }
  }
  Dibujar_Cart(titulo_elemento, precio_elemento);
  Actualiza_Total();
};
//Funcion para Remover
const Remover=()=>{
  event.target.parentElement.parentElement.remove();
  Actualiza_Total();
}
//Funcion Comprar
const Comprar=()=>{
  const $items = document.querySelectorAll(".cart-items .cart-row ");
  if ($items.length != 0) {
    for (let index = 0; index < $items.length; index++) {
      $items[index].remove();
    }
    Actualiza_Total();
    alert("Recebemos seu pagamento!");
  } else {
    alert("Você ñao tem compras");
  }
}
/********************************Eventos*********************************************/
//Action input de cantidad cambiado
for (let index = 0; index < $quantity_act.length; index++) {
  $quantity_act[index].addEventListener("change", Quantity_Change);
}

/*//Action Boton Remover
for (let index = 0; index < $remove_button.length; index++) {
  $remove_button[index].addEventListener("click", (event) => {
    event.target.parentElement.parentElement.remove();
    Actualiza_Total();
  });
}*/

/*//Action Boton anadir
for (let index = 0; index < $cart_button.length; index++) {
  $cart_button[index].addEventListener("click", Add_Cart);
}*/

/*//Action boton Comprar
$comprar_button.addEventListener("click", () => {
  const $items = document.querySelectorAll(".cart-items .cart-row ");
  if ($items.length != 0) {
    for (let index = 0; index < $items.length; index++) {
      $items[index].remove();
    }
    Actualiza_Total();
    alert("Se ha debitado la cuenta de su tarjeta");
  } else {
    alert("você ñao tem compras pra debitar na sua tarjeta");
  }
});*/
