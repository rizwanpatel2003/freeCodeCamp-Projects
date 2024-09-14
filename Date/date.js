let myDate= new Date(2024,8,7,5,30);
console.log(myDate);
let time=document.querySelector(".time");
time.innerHTML="Giveaway Ends on "+myDate.toDateString();

let countdownTime = 24 * 60 * 60 * 1000; // 1 day in milliseconds
let intervalId;
let days=document.querySelector(".days");
let hours=document.querySelector(".hours");
let minutes=document.querySelector(".Minutes");
let seconds=document.querySelector(".seconds");

function countdown() {
  let timeLeft = countdownTime;
  intervalId = setInterval(function() {
    timeLeft -= 1000; // decrement by 1 second
     days.innerHTML = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
     hours.innerHTML = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
     minutes.innerHTML = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
     seconds.innerHTML = Math.floor((timeLeft % (60 * 1000)) / 1000);


    if (timeLeft <= 0) {
      clearInterval(intervalId);
      console.log("Countdown finished!");
    }
  }, 1000); // execute every 1 second
}

countdown();