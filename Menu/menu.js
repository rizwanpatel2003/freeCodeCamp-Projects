let classes = ["dgd","breakfastoff", "lunchoff", "dinneroff", "drinksoff"];
let btns = document.querySelectorAll("button");
let divs = [];
let bf = document.querySelector(".breakfast");
let lu = document.querySelector(".lunch");
let di = document.querySelector(".dinner");
let dr = document.querySelector(".drinks");
divs.push("0");
divs.push(bf);
divs.push(lu);
divs.push(di);
divs.push(dr);
console.dir(divs);

// Add event listener to 0th button
btns[0].addEventListener("click", () => {
    for (let i = 1; i < divs.length; i++){
        divs[i].classList.remove(classes[i]);
    }
});

for (let index = 1; index < btns.length; index++) {
   btns[index].addEventListener("click", () => {
    for (let i = 1; i < divs.length; i++){
        if(i === index){ // Use === for comparison
            divs[i].classList.remove(classes[i]);
        }
        else if(!(divs[i].classList.contains(classes[i]))) {
            divs[i].classList.add(classes[i]);
        }
    }  
})}