
//Variables
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign_in");

// get Data from Local Storage
let getUser = localStorage.getItem("username");
let getpassword = localStorage.getItem("password");

//Events
loginBtn.addEventListener("click" , login)

/******************* Login Function**********************/
function login(e){
e.preventDefault();
if( username.value === ""  || password.value === ""){
    alert("Please fill Data");
} 
else {
    if( (getUser && getUser.trim() === username.value.trim()) && ( getpassword && getpassword === password.value)){
        setTimeout(() => {
            window.location = "index.html"
        } , 1500)
    } else{
        alert("wrong Data")
    }
}
}