
/************* بسم الله الرحمن الرحيم*************/

let productDom = document.querySelector(".products")
let noProductsDom = document.querySelector(".no-products") 

let drawProductUi;
(drawProductUi = function (products = [ ]) {
let allViews = JSON.parse(localStorage.getItem("myViews")) || products ;



    if(allViews.length != 0){  
    let productUi = allViews.map( (item) => {
        return`
         <div class="product-item" style = "border:  ${item.isMe === "yes" ? "2px solid blue" : "" }">
        <img src=" ${item.imgUrl}" class="product-item-img" alt="image">
        <div class="product-item-desc">
            <a> ${item.title} </a>
            <p> ${item.desc}</p>
            <span> Size:${item.size}</span>

        </div>

           
        
    </div> 
    `;
    });

    productDom.innerHTML = productUi.join("");
    }else{
     noProductsDom.innerHTML = "there is no Products";
    }

})();  

