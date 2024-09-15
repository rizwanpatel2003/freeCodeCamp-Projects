let btns=document.querySelectorAll(".btns-plus");
let btnsminus=document.querySelectorAll(".btns-minus");
let para=document.querySelectorAll(".yep");
for (let index = 0; index < btns.length; index++) {
   btns[index].addEventListener("click",()=>{
        para[index].classList.add("show");
   })
    }
    for (let index = 0; index < btnsminus.length; index++) {
        btnsminus[index].addEventListener("click",()=>{
             para[index].classList.remove("show");
        })
         }