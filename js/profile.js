
/*** بسم الله الرحمن الرحيم***/

// Get Data form localstorage
let get_User = localStorage.getItem("username")
let get_Email = localStorage.getItem("email")
let myAvater = localStorage.getItem("Avater")
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let myProducts = products.filter((item)=> item.isMe === "yes");

// Variables
let usernameDom = document.querySelector("#user-name")
let myEmailDom = document.querySelector("#user-email")
let productLength = document.querySelector("#productLength span");
let Image_Url = document.querySelector("#user-image")



usernameDom.innerHTML = get_User ;
myEmailDom .innerHTML = get_Email ;
if(myAvater){
    Image_Url.src = myAvater;
}else{
    Image_Url.src;
}


/* nice Logic*/
if(myProducts.length != 0 ){
    productLength.innerHTML = myProducts.length;
} else{
    productLength.remove();
}





























