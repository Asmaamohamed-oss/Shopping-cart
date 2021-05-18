
//******** بسم الله الرحمن الرحيم  ********//

//Check lacalStorage
let getLang = localStorage.getItem("langDir");
if(getLang){
    if(getLang == "rtl"){
        changeDir("rtl")
    }else{
        changeDir("ltr")
    }
}


//variables
let en = document.querySelector("#en-lang");
let ar = document.querySelector("#ar-lang");

// Events
en.addEventListener("click" , () => changeDir("ltr"));
ar.addEventListener("click" , ()=> changeDir("rtl"));

function changeDir(dir){
    document.documentElement.setAttribute("dir", dir);
    localStorage.setItem("langDir",dir)
}