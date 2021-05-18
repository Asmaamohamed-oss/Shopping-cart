

/* بسم الله الرحمن الرحيم */
let productDom = document.querySelector(".products")
let noProductsDom = document.querySelector(".no-products") 


function drawFavoriteProductUi(allProducts = []){
    if(JSON.parse(localStorage.getItem("productsFavorite")).length === 0)
        noProductsDom.innerHTML = "there is no Favorits";


let productsInCart = 
            JSON.parse(localStorage.getItem("productsFavorite")) || allProducts; 

    let productUi = productsInCart.map((item)=>{
        return `
         <div class="product-item">
        <img src=" ${item.imgUrl}" class="product-item-img" alt="image">
        <div class="product-item-desc">
            <h4> ${item.title} </h4>
            <p> Lorem ipsum, dolor sit amet consectetur </p>
            <span> Size:${item.size}</span> <br>
            <span> Quntaty:${item.qty}</span>
        </div>
        <div class="product-item-action">
            <button class="add-to-card" onclick = "removeFromFavorits(${item.id})">Remove from Favorits</button>
        </div>
    </div> 
        `;

});

    productDom.innerHTML = productUi.join("") ;
}
drawFavoriteProductUi();
// drawFavoriteProductUi();

function removeFromFavorits(id){
    let productsFavorite  = localStorage.getItem("productsFavorite")
    if(productsFavorite){
    let items = JSON.parse(productsFavorite)
        let filterdItems = items.filter((item)=> item.id !== id);
        localStorage.setItem("productsFavorite" , JSON.stringify(filterdItems))
        drawFavoriteProductUi( filterdItems);

    }
    // console.log(productsFavorite )
}
