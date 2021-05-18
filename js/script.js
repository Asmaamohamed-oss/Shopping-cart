
/* بسم الله الرحمن الرحيم*/

let productDom = document.querySelector(".products");

let products = productsDB; // my data from data.js



// Display Products
let drawProductUi;
(drawProductUi = function (products = [ ]) {
    let productUi = products.map( (item) => {
        return`
         <div class="product-item" style = "border:  ${item.isMe === "yes" ? "1px solid blue" : "" }"> <!-- special to crate product part-->
        <img src=" ${item.imgUrl}" class="product-item-img" alt="image">
        <div class="product-item-desc">
            <a onclick = "saveItemsDetails(${item.id})"> ${item.title} </a>
            <p> ${item.desc}</p>
            <span> Size:${item.size}</span> <br>

            ${item.isMe === "yes" && 
             "<button class ='edit-product' onclick = 'editProduct(" +item.id+ ")' >  Edit Product</button>"}

        </div>

        <div class="product-item-action">
            <button class="add-to-card" onclick ="addedToCart(${item.id})">Add to Cart</button>
             <i class="favorite fa fa-heart-o" style = "color : ${item.liked === "true" ? "red" : "" }"  
             onclick = "addToFavorite(${item.id})"></i> 
        </div>
    </div> 
    `;
    });

    productDom.innerHTML = productUi.join("");
})(JSON.parse(localStorage.getItem("products")) || products);


// Add to cart
function addedToCart(id){
    if(localStorage.getItem("username")){
        let addproducts = JSON.parse(localStorage.getItem("products")) || products;
        let product = addproducts.find((item) => item.id === id)
        let isProductInCart = addedItem.some(i => i.id === product.id)
        if(isProductInCart){
            addedItem = addedItem.map((p)=>{
                if(p.id === product.id) p.qty += 1;
                return p ;
            });
        
        } else{
            addedItem.push(product);
        }
        
        cartProductDivDom.innerHTML = " ";
        addedItem.forEach((item) => {
            cartProductDivDom.innerHTML += `<p class = "cart-style"> ${item.title} <span class ="item-qty"> ${item.qty} </span> </p>`
        });
        
        // Save Data
        localStorage.setItem("productsInCart" , JSON.stringify(addedItem));
       
        // Add Counter Of Items 
        let cartProductItem = document.querySelectorAll(".cart-products div p");
         badgeDom.style.display = "block";
        badgeDom.innerHTML = cartProductItem.length;
    } else{
        window.location = "login.html";
    }
}


// function getUniceArr(arr , filtertype){
//     let unique = arr
//     .map(( item )=> item[filtertype]) //  بتاع العناصر(id) هتجيب 
//     .map((item , i, final) => final.indexOf(item) === i && i) //  هنجيب (index) بتاع كل عنصر من غير تكرار 
//     .filter((item) =>arr[item] ) // هيشيل ال  false
//     .map((item) => arr[item]) ; // هيرجع العناصر تاني كلها 

//     return unique ; 
// }


 

/************** saveItemDetails By ID******************/
function saveItemsDetails (id){
    localStorage.setItem("productId" , id)
    window.location = "cartDetails.html"
};


/* ****************   search by name  *****************/
let input = document.getElementById("search")
input.addEventListener("keyup" , function(e){
    // if(e.keyCode === 13)
    
search(e.target.value, JSON.parse(localStorage.getItem("products")))    
 if(e.target.value.trim() ==="")
    drawProductUi( JSON.parse(localStorage.getItem("products")))
    
});

function search (title , myArray){
   let arr =  myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase())  !== -1 );
   drawProductUi(arr);

}


// Add to Favorite
let favoriteItems = localStorage.getItem("productsFavorite") 
? JSON.parse(localStorage.getItem("productsFavorite")) 
: [];



function addToFavorite(id){
    if(localStorage.getItem("username")){
    
let favproducts = JSON.parse(localStorage.getItem("products")) || products;
let choosenItem = favproducts.find((item)=> item.id === id);

// choosenItem.liked = "true";
// console.log("cc", choosenItem)
let isProductInFavorite = favoriteItems.find((item)=> item.id === choosenItem.id)
if(isProductInFavorite){
favoriteItems = favoriteItems.map((p)=>{
    if(p.id === choosenItem.id) p.liked = "true" ;
        return p;
    });
    } else{
    favoriteItems.push(choosenItem)
    
    }

////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
localStorage.setItem("productsFavorite", JSON.stringify(favoriteItems));
let myProduct = localStorage.getItem("products") ?
JSON.parse(localStorage.getItem("products")) : products ; 

myProduct.map((item)=>{
   
    if(item.id ===  choosenItem.id) {
        item.liked = "true";
    }
 
}) 


//////////////////////////////////*****************************************////////////////////////////////////////////////
/////////////////////////////////*********************************************/////////////////////////////////////////////////
localStorage.setItem("products" , JSON.stringify(myProduct))
drawProductUi(myProduct)           

}else{
window.location = "login.html"
    }
}


/********* ************************search by size *******************************/
let sizeFilter = document.getElementById("size-filter")

sizeFilter.addEventListener("change" , getProductsFilterBySize)
 
function getProductsFilterBySize(e){
    let val = e.target.value;
    let filterProducts = JSON.parse(localStorage.getItem("products")) || products;
    if(val == "all"){
        drawProductUi(filterProducts);
    }else{
        filterProducts = filterProducts.filter((i)=> i.size === val)
        drawProductUi(filterProducts)
    }
}

/*********** EditProductById**************/
function editProduct(id){
     localStorage.setItem("editProductId" , id)
     window.location = "EditProduct.html"
}


