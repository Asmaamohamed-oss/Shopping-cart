
/************* بسم الله الرحمن الرحيم*************/


let productDom = document.querySelector(".products")
let noProductsDom = document.querySelector(".no-products") 

let drawProductUi;
(drawProductUi = function (products = [ ]) {
    let myProducts = products.filter((i)=> i.isMe === "yes")
    if(myProducts.length != 0){
      
    let productUi = myProducts.map( (item) => {
        return`
         <div class="product-item" style = "border:  ${item.isMe === "yes" ? "2px solid blue" : "" }">
        <img src=" ${item.imgUrl}" class="product-item-img" alt="image">
        <div class="product-item-desc">
            <a onclick = "saveItemsDetails(${item.id})"> ${item.title} </a>
            <p> ${item.desc}</p>
            <span> Size:${item.size}</span>

          
             <button class ='edit-product' onclick = "editProduct(${item.id})" >  Edit Product</button> <br>
             <button class ='edit-product' onclick = "deleteProduct(${item.id})" >  Delete Product</button>

        </div>

           
        
    </div> 
    `;
    });

    productDom.innerHTML = productUi.join("");
    }else{
     noProductsDom.innerHTML = "there is no Products";
    }

})(JSON.parse(localStorage.getItem("products")) || productsDB);


// Edit Product
function editProduct(id){
    localStorage.setItem("editProductId" , id)
    window.location = "EditProduct.html"
}

function deleteProduct(id){
    let products = JSON.parse(localStorage.getItem("products"))|| productsDB;
    let myProducts = products.filter((i)=> i.isMe === "yes")
    let deleted = myProducts.filter((i)=> i.id !== id)
    let checked = myProducts.find((i)=> i.id === id)
    products = products.filter((item) => item.id !== checked.id)
    localStorage.setItem("products", JSON.stringify(products));
    drawProductUi(deleted)
    

}