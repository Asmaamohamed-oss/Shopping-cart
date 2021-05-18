
/* بسم الله الرحمن الرحيم*/
// Variables
let productName = document.getElementById("product-name")
let productDesc = document.getElementById("product-desc")
let productSizeSelect = document.getElementById("product-size")
let createForm = document.getElementById("create-form");
let inputFile = document.getElementById("upload-image-file")
let productSizeValue ;
let productImag ;

//Events
productSizeSelect.addEventListener("change", getsizevalue);
createForm.addEventListener("submit" , createProductFun);
inputFile.addEventListener("change" , uploadImage)

function getsizevalue(e){
 productSizeValue = e.target.value ;
}

function createProductFun(e){
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB ;
    let nameValue = productName.value;
    let descValue = productDesc.value;
    if(nameValue && descValue){
        let obj = {
            id : allProducts ? allProducts.length + 1 : 1,
            imgUrl: productImag  , 
            qty: 1,
            title : nameValue,
            size: productSizeValue,
            desc: descValue,
            isMe: "yes",
            
        };
    
     let newProducts  =  allProducts ? [...allProducts , obj] : [obj] ;
    localStorage.setItem("products", JSON.stringify(newProducts))
    
    productName.value = "";
    productDesc.value = "";
    productSizeSelect.value = "";
 
 setTimeout(()=>{
    window.location = "index.html";
 },1500)   

    } else{
        alert( "Enter Data...")
    }
}


// uploadImage

function uploadImage(){
    let file = this.files[0];
    let types = [ "image/jpeg","image/png"];

    if(types.indexOf(file.type) == -1){
        alert("type not supported")
        return;
    }

    if(file.size > 2 * 1024 * 1024){
        alert("Image notExced 2mg")
        return;
    }

    // productImag = URL.createObjectURL(file)
    // console.log("p", perview)
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