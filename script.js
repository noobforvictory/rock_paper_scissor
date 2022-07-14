function displayResult(result){
    const output=document.querySelector('.result');
    output.innerHTML+= result;

}
function computerPlay(){
    let num = Math.random();
    let result ="";
    if(num<0.333){
        result= "rock";
        return result;
    }
    else if(num<0.666){
        result= "paper";
        return result;
    }
    else if(num<0.999){
        result= "scissor";
        return result;
    }
}
var num =1;
var win =0;
var lose=0;
var draw=0;
function playRound(){
    
    if(num<=5){
        num++;
        
    let input =(this.textContent);
    let result = computerPlay();
    
    if(input===result){
        displayResult("<br> computer chose "+result+"<br> its a tie");
     draw++;
    }
    else if(input==="rock" & result==="scissor"){
        displayResult("<br> computer chose "+result+" <br> you win");
        
        win++;
    }
    else if(input==="paper" & result==="rock"){
        displayResult("<br> computer chose "+result+" <br> you win");
         
        win++;
    }
    else if(input==="scissor" & result==="paper"){
        displayResult("<br> computer chose "+result+"<br>  you win");
        
        win++;
    }
    else{
        displayResult("<br> computer chose "+result+"<br> you lose");
         
        lose++;
        
    }
    if(win+lose+draw===5){
        displayResult("<br>you won "+win+" times. you lost "+lose+" times. game draw "+draw+" times.");
        }
  
}
}




function game(){
    const buttons = Array.from(document.querySelectorAll('.button'));
    const result = buttons.forEach(button => button.addEventListener('click',playRound));
    
}



const buttons = document.createElement('div');

buttons.classList.add('buttons');

const button1 = document.createElement('button');
button1.textContent="rock";
button1.classList.add('button');
const button2 = document.createElement('button');
button2.textContent="paper";
button2.classList.add('button');
const button3 = document.createElement('button');
button3.textContent="scissor";
button3.classList.add('button');
const body = document.querySelector('.body');
buttons.appendChild(button1);
buttons.appendChild(button2);
buttons.appendChild(button3);
body.appendChild(buttons);
const result= document.createElement('div');
result.classList.add('result');
body.appendChild(result);
game();

   


