
/* بسم الله الرحمن الرحيم */
// variables
let productDom = document.querySelector(".products")
let noProductsDom = document.querySelector(".no-products") 

/************ drawcartproduct******************/
function drawCartProductUi(){
    // check in the locaal Storage
if(JSON.parse(localStorage.getItem("productsInCart")).length === 0)
noProductsDom.innerHTML = "there is no items";

// Data from Loacal Storage
let productsInCart = JSON.parse(localStorage.getItem("productsInCart")); 

    let productUi = productsInCart.map((item)=>{
        return `
         <div class="product-item">
        <img src=" ${item.imgUrl}" class="product-item-img" alt="image">
        <div class="product-item-desc">
            <h4> ${item.title} </h4>
            <p> ${item.desc}</p>
            <span> Size:${item.size}</span> <br>
            <span> Quntaty:${item.qty}</span>
        </div>
        <div class="product-item-action">
            <button class="add-to-card" onclick ="removeFromCart(${item.id})">Remove from cart</button>
        </div>
    </div> 
        `;

});

    productDom.innerHTML = productUi.join("") ;
}

drawCartProductUi()

function removeFromCart(id){
    let productsInCart = localStorage.getItem("productsInCart")
    if(productsInCart){
    let items = JSON.parse(productsInCart)
        let filterdItems = items.filter((item)=> item.id !== id)
        localStorage.setItem("productsInCart" , JSON.stringify(filterdItems))
        drawCartProductUi(filterdItems)
    }

}
