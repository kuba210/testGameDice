

const dice = document.querySelector('.dice-btn');
// let myName = prompt("What is your name?");
// document.querySelector(".myname").innerHTML = myName;

document.querySelector('.name')
let playerScore = 0;
let computerScore = 0;
const totalScore =10;
//const newComputerGuess=0;
//const newRandomNumber=0;

function higher(){

     //DICE1
     let randomNumber = Math.floor((Math.random()*6)+1);
     let dicelocation = "images/"+"dice-"+randomNumber+".png";
     let img1 = document.querySelectorAll(".img-dice")[0];
     img1.setAttribute('src',dicelocation);


     //DICE1+.
     let newRandomNumber = Math.floor((Math.random()*6)+1);
     let dicelocation1 = "images/"+"dice-"+newRandomNumber+".png";
     let img2 = document.querySelectorAll(".img-dice")[1];
     img2.setAttribute('src',dicelocation1);
 
     //DICE2
     let randomNumber2 = Math.floor((Math.random()*6)+1);;
     let dicelocation2 = "images/"+"dice-"+randomNumber2+".png";;
     let img3 = document.querySelectorAll(".img-dice")[2];
     img3.setAttribute('src',dicelocation2);

     
     //DICE2+
     let newRandomNumber2 = Math.floor((Math.random()*6)+1);;
     let dicelocation3 = "images/"+"dice-"+newRandomNumber2 +".png";;
     let img4 = document.querySelectorAll(".img-dice")[3];
     img4.setAttribute('src',dicelocation3);
     ////////////////////////////////////////////

     let playerGuess = randomNumber+newRandomNumber;
     let computerGuess = randomNumber2+newRandomNumber2;


   if (playerGuess > computerGuess ) {
    document.querySelector(".text-field").innerHTML="You Win";
    playerScore++;
    document.querySelector(".got-user").innerHTML=playerScore;
} else if(playerGuess == computerGuess ) {  
     document.querySelector(".text-field").innerHTML="DICE DRAW";
}  else {
  document.querySelector(".text-field").innerHTML="You Lose";
    computerScore++;
    document.querySelector(".got-com").innerHTML=computerScore;
} 
if(computerScore == totalScore){
  alert("you lose");
  reset();
  }
  else if (playerScore == totalScore){
    alert("you win")
    reset();
  }
}



function lower(){
    //DICE1
    let randomNumber = Math.floor((Math.random()*6)+1);
    let dicelocation = "images/"+"dice-"+randomNumber+".png";
    let img1 = document.querySelectorAll(".img-dice")[0];
    img1.setAttribute('src',dicelocation);


    //DICE1+.
    let newRandomNumber = Math.floor((Math.random()*6)+1);
    let dicelocation1 = "images/"+"dice-"+newRandomNumber+".png";
    let img2 = document.querySelectorAll(".img-dice")[1];
    img2.setAttribute('src',dicelocation1);

    //DICE2
    let randomNumber2 = Math.floor((Math.random()*6)+1);;
    let dicelocation2 = "images/"+"dice-"+randomNumber2+".png";;
    let img3 = document.querySelectorAll(".img-dice")[2];
    img3.setAttribute('src',dicelocation2);

    
    //DICE2+
    let newRandomNumber2 = Math.floor((Math.random()*6)+1);;
    let dicelocation3 = "images/"+"dice-"+newRandomNumber2 +".png";;
    let img4 = document.querySelectorAll(".img-dice")[3];
    img4.setAttribute('src',dicelocation3);
    ////////////////////////////////////////////

    let playerGuess = randomNumber+newRandomNumber;
    let computerGuess = randomNumber2+newRandomNumber2;


  if (playerGuess < computerGuess ) {
   document.querySelector(".text-field").innerHTML="You Win";
   playerScore++;
   document.querySelector(".got-user").innerHTML=playerScore;
} else if(playerGuess == computerGuess ) {  
    document.querySelector(".text-field").innerHTML="DICE DRAW";
}  else{  
   document.querySelector(".text-field").innerHTML="You Lose";
   computerScore++;
   document.querySelector(".got-com").innerHTML=computerScore;
}
console.log("this is the computerGuess "+computerGuess);
console.log("this is the playerGuess "+playerGuess);

if(computerScore === totalScore){
  alert("you lose");
  reset();
  }
  else if (playerScore === totalScore){
    alert("you win")
    reset();
  }

}

function reset() {
    window.location.reload();
}

// function score(){
//   const total = 10;

//   if (playerScore == total){
  
//   }
// }