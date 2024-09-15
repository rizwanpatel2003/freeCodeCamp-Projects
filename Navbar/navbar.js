/*let btn=document.querySelector("button");
btn.addEventListener("click",navbar);
let container=document.querySelector(".content");
let hide=false;
function navbar(){
    if(hide==false){
        hide=true;
        container.style.top="50px";
    }
    else if(hide==true){
     hide=false;
     container.style.top="-150px";
    }
}*/
let btn = document.querySelector("button");
btn.addEventListener("click", navbar);
let container = document.querySelector(".content");


function navbar() {
    container.classList.toggle("show");
   
}