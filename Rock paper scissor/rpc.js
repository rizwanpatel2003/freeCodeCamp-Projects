let symbols=document.querySelectorAll(".game");
let dash=document.querySelector(".dash");
let userscore=document.querySelector(".user-score");
let comscore=document.querySelector(".com-score");
let ucnt=0;
let ccnt=0;
let userchoice=0;
let computer=-1;
for (let index = 0; index < symbols.length; index++) {
  
 symbols[index].addEventListener("click",()=>{
        userchoice=index;
        
        computer=Math.floor(Math.random()*symbols.length);
        if(ccnt===9||ucnt===9){
            if(ccnt===9){
                dash.textContent="Computer wins";
                
                setTimeout(()=>{
                    userscore.textContent="0";
                    dash.textContent="choose any to start to game";
                    comscore.textContent="0";
                },3000)
            
            
            }
            else{
                dash.textContent="User wins!";
                setTimeout(()=>{
                    userscore.textContent="0";
                    dash.textContent="choose any to start to game";
                    comscore.textContent="0";
                },3000)
                

            }
        }
    if(computer===userchoice){
        dash.textContent="it is draw please choice again";
        }
    else if(userchoice===0&&computer===2||userchoice===2&&computer===0){
            if(computer===2){
            dash.textContent=" user win, rock beat scissor ";
               ucnt++;
               userscore.textContent=ucnt;
            }
            else if(userchoice===2){
            dash.textContent="computer win, rock beat scissor ";
               ccnt++;
               comscore.textContent=ccnt;
            }
    }
    else if(userchoice===0&&computer===1||userchoice===1&&computer===0){
        if(computer===1){
             dash.textContent="computer win, paper beat rock ";
             ccnt++;
             comscore.textContent=ccnt;
              }
              else if(userchoice===1){
                 dash.textContent=" user win, paper beat rock ";
                 ucnt++;
                 userscore.textContent=ucnt;
              }

    }
    else if(userchoice===1&&computer===2||userchoice===2&&computer===1){
        if(computer===2){
             dash.textContent="  computer win, scissor beat paper ";
             ccnt++;
             comscore.textContent=ccnt;
              }
              else if(userchoice===2){
                 dash.textContent="user win, rock beat scissor ";
              }

    }
    })
  
}

