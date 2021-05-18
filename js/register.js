/* بسم الله الرحمن الرحيم*/ 

// variables
let userName = document.querySelector("#username");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let registerBtn= document.querySelector("#sign_up");

//Events
registerBtn.addEventListener("click" , register)


function register(e){
e.preventDefault();
if( userName.value === "" || password.value === "" || email.value === "" ){
    alert("Please fill Data");
} else {

    localStorage.setItem("username" , userName.value) ;
    localStorage.setItem("email" , email.value) ;
    localStorage.setItem("password" , password.value) ;

setTimeout(() => {
   window.location = "login.html";
} , 1500) ;

}
}    





