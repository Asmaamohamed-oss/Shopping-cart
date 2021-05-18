
/*** بسم الله الرحمن الرحيم***/

// Get Data form localstorage
let get_User = localStorage.getItem("username")
let get_Email = localStorage.getItem("email")



// Variables
let usernameInput = document.querySelector("#change-Name ")
let myEmailInput = document.querySelector("#change-Email")
let editProfileForm = document.querySelector("#editProfile-form");
let inputFile = document.getElementById("upload-avater-image")
let AvaterImage;

//setting Value Of Input
usernameInput.value = get_User ;
myEmailInput.value = get_Email ;


// Events 
editProfileForm.addEventListener("submit" , updateProfileFun);
inputFile.addEventListener("change" , uploadAvaterImage)


function updateProfileFun(e){
    e.preventDefault();

localStorage.setItem("username" ,usernameInput.value )
localStorage.setItem("email"  ,   myEmailInput.value )
localStorage.setItem("Avater" , AvaterImage)

setTimeout(()=>{
    window.location = "profile.html"
} , 500)

}



function uploadAvaterImage(){
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
        AvaterImage = reader.result;
    }
    reader.error = function(){
        alert("Error")
    }
}  


