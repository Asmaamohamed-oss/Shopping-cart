
// variables
let userInfo = document.querySelector("#user_info"); //  Show the info 
let userDom = document.querySelector("#myuser"); //  show the userName
let links = document.querySelector("#links"); //  remove the Sign in - up
let logoutBtn = document.querySelector("#logout"); //  remove and leave the page

// get Data From Local Storage
let myUser = localStorage.getItem("username")

if(myUser){
    links.remove();
    userInfo.style.display="flex";
    userDom.innerHTML= myUser;
}


// Events
logoutBtn.addEventListener("click", logoutFun);

//********** logoutFun***************/
function logoutFun(){
    localStorage.clear();
    setTimeout(()=>{
        window.location = "register.html";
    },1500)
};



