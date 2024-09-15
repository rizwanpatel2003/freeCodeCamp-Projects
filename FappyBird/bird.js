let playground=document.querySelector(".playground");
let bird= document.createElement("div");
bird.style.top='360px';
document.addEventListener("DOMContentLoaded",()=>{
   

      createbird();
      createblock();
      birdMove();
   




});
function createbird(){

    
      bird.classList.add("bird");
     console.log(bird);
      playground.appendChild(bird);
     
      
}

function createblock(){
    let leftmarg = 100;
    setInterval(()=>{
        let hu = 100 + Math.floor(Math.random()*250);
        let hd = hu - 100;
        let blocku = document.createElement("div");
        blocku.classList.add("block");
        blocku.style.height = hu + 'px';
        blocku.style.left = (leftmarg) + 'px';
        playground.appendChild(blocku);
       
        let blockd = document.createElement("div");
        blockd.classList.add("blockd");
        blockd.style.height = hd + 'px';
        blockd.style.left = (leftmarg) + 'px';
        playground.appendChild(blockd);

        // Remove old blocks

        // Update leftmarg
        leftmarg += 150; // adjust the gap as needed
    }, 1000);
    
}

let birdTop = parseInt(bird.style.top); 
let gravity = 0.5; // gravity constant
let birdright=parseInt(bird.style.left)||0;
function birdMove(){
    
    console.log(birdTop);
    console.log(birdright);
    document.addEventListener("keydown", (event) => {
        console.log(event.key);
        if (event.key === "ArrowUp") {
          birdTop -= 50; 
        }
        else if(event.key === "ArrowRight"){
            birdright +=30;
            bird.style.left = birdright + "px"; 
        }
      });
      setInterval(() => {
        birdTop += gravity;
        bird.style.top = birdTop + "px";
    
        // Check for collision
        let blocks = document.querySelectorAll(".block, .blockd");
        blocks.forEach((block) => {
          let blockTop = parseInt(block.style.top);
          let blockLeft = parseInt(block.style.left);
          let birdTopInt = parseInt(bird.style.top);
          let birdLeftInt = parseInt(bird.style.left);
    
          // Collision detection
          if (
            birdTopInt >= blockTop &&
            birdTopInt <= blockTop + parseInt(block.style.height) &&
            birdLeftInt >= blockLeft &&
            birdLeftInt <= blockLeft + parseInt(block.style.width)
          ) {
            // Game over
            alert("Game Over!");
            // You can also reset the game or show a game over screen here
          }
        });
      }, 16);
    
      
}
