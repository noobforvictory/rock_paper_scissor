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
    else if(num<=0.999){
        result= "scissors";
        return result;
    }
}
function playRound(){
    let input =(prompt("enter rock or paper or scissors")).toLowerCase();
    let result = computerPlay();
    let win ="w";
    let lose="l";
    let draw="d";
    if(input===result){
        console.log(result+"\n its a tie");
     return draw;
    }
    else if(input==="rock" & result==="scissors"){
        console.log(result+" \nyou win");
        return win;
    }
    else if(input==="paper" & result==="rock"){
        console.log(result+"\n you win");
        return win;
    }
    else if(input==="scissors" & result==="paper"){
        console.log(result+"\n you win");
        return win;
    }
    else{
        console.log(result+"\n you lose");
        return lose;
    }
}

function game(){
    let win=0;
    let lose=0;
    let draw=0;
    let result="";
    
    for(let i=0; i<5; i++){
    result= playRound();
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
    console.log("you won "+win+" times. you lost "+lose+" times. game draw "+draw+" times.")
}
game(