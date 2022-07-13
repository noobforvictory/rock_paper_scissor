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
function playRound(){
    let input =(this.textContent);
    
    let result = computerPlay();
    let win ="w";
    let lose="l";
    let draw="d";
    if(input===result){
        displayResult("\n"+"computer chose "+result+"\n its a tie");
     return draw;
    }
    else if(input==="rock" & result==="scissor"){
        displayResult("<br> computer chose "+result+" <br> you win");
        return win;
    }
    else if(input==="paper" & result==="rock"){
        displayResult("<br> computer chose "+result+" <br> you win");
        return win;
    }
    else if(input==="scissor" & result==="paper"){
        displayResult("<br> computer chose "+result+"<br>  you win");
        return win;
    }
    else{
        displayResult("<br> computer chose "+result+"<br> you lose");
        return lose;
    }
    
    
}



function game(){
    let win=0;
    let lose=0;
    let draw=0;
    
    const buttons = Array.from(document.querySelectorAll('.button'));
    
   for(let i=0; i<5; i++){
   
    const result=buttons.forEach(buttons => this.addEventListener('click',playRound));

     if(result==="w"){
        win++;
    }
    else if(result==="l"){
        lose++;
    }
    else {
        draw++;
    }
    }
    displayResult("you won "+win+" times. you lost "+lose+" times. game draw "+draw+" times.")
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

   


