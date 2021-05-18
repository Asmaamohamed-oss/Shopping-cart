
let cartProductDivDom = document.querySelector(".cart-products div")
let shoppingCartIcon = document.querySelector(".shoppingCartIcon") 
let badgeDom = document.querySelector(".badge")
let cartProductMenu = document.querySelector(".cart-products")

  let addedItem = localStorage.getItem("productsInCart") 
  ? JSON.parse(localStorage.getItem("productsInCart")) 
  : [];

  if(addedItem){
  addedItem.map((item) =>{
   cartProductDivDom.innerHTML += `<p> ${item.title} ${item.qty}</p>`
  });

     badgeDom.style.display = "block";
      badgeDom.innerHTML = addedItem.length;
  }

// Events
shoppingCartIcon.addEventListener("click" ,openCartMenu);
  // Open Cart Menu
function openCartMenu(){
    if(cartProductDivDom.innerHTML != ""){
        if(cartProductMenu.style.display == "block"){
            cartProductMenu.style.display = "none";
        } else{
            cartProductMenu.style.display = "block"
        }
    }

}
 