/* بسم الله الرحمن الرحيم*/


// get Items from local storage
let allDetails = localStorage.getItem("myViews") ? JSON.parse(localStorage.getItem("myViews")) : [];
let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productId");

let itemDetailsDom = document.querySelector(".item-Details")
let productDetails = products.find((item) => item.id == productId);
let productView = allDetails.some((i)=> i.id === productDetails.id)



if(productView){
  allDetails = allDetails.map((item)=>{
    if(item.id === productDetails.id ) item.qty += 1;
    return item;
  });
}else{
  allDetails.push( productDetails)
}


if(allDetails){
allDetails.map((item)=>{
itemDetailsDom.innerHTML = ` 
  <img src=" ${item.imgUrl}">
  <h2> ${item.title}</h2>
  <p> ${item.desc}</p>
  <span> Size: ${item.size} </span> <br>
  <span> Quntatiy: ${item.qty} </span> <br>
  <button class=" edit-product" onclick = "editProduct(${productId})"> Edit Product</button>

`;
  })
}

function editProduct(id){
  localStorage.setItem("editProductId" , id)
  window.location = "EditProduct.html"
}

localStorage.setItem("myViews" ,JSON.stringify(allDetails));
