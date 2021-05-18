
/* بسم الله الرحمن الرحيم*/

//variable
let products = JSON.parse(localStorage.getItem("products")) || productsDB ;
let ProductId = JSON.parse(localStorage.getItem("editProductId"))
let getProduct = products.find((i)=> i.id === ProductId)


let productName = document.getElementById("product-name")
let productDesc = document.getElementById("product-desc")
let productSizeSelect = document.getElementById("product-size")
let updateForm = document.getElementById("update-form");
let inputFile = document.getElementById("upload-image-file")
let productSizeValue ;
let productImag ;


productName.value = getProduct.title ;
productDesc.value = getProduct.desc ;
productSizeSelect.value = getProduct.size;
productImag = getProduct.imgUrl;


//Events
productSizeSelect.addEventListener("change", getsizevalue);
updateForm.addEventListener("submit" , updateProductFun);
inputFile.addEventListener("change" , uploadImage)

function getsizevalue(e){
    productSizeValue = e.target.value ;
   }

   

function updateProductFun(e){
 e.preventDefault();

     getProduct.title = productName.value;
     getProduct.desc = productDesc.value;
     getProduct.size = productSizeSelect.value;
     getProduct.imgUrl = productImag;
localStorage.setItem("products",JSON.stringify( products));

setTimeout(()=>{
    window.location = "index.html"
} , 500)

}



// uploadImage

function uploadImage(){
    let file = this.files[0];
    let types = [ "image/jpeg","image/png"];

    if(types.indexOf(file.type) == -1){
        alert("type not supported")
        return ;
    }

    if(file.size > 2 * 1024 * 1024){
        alert("Image notExced 2mg")
        return;
    }

    getImageBase64(file)
}


function getImageBase64(file){
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function(){
        productImag = reader.result;
    }
    reader.error = function(){
        alert("Error")
    }
}  