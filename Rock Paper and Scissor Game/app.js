let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissors");



function computerChoicefunc(){
    let computerChoice = Math.random()*3;
    if(computerChoice > 0 && computerChoice <= 1){
        return "rock";
    }
    else if(computerChoice > 1 && computerChoice <= 2){
        return "paper";
    }
    else if(computerChoice>2 && computerChoice<=3){
        return "scissor";
    }
}


function userChoicefunc(){
    let userChoice;
    rock.addEventListener("click", ()=> {
        userChoice = "rock";
        computerChoice = computerChoicefunc();
        score(userChoice,computerChoice);
    })
    
    paper.addEventListener("click", ()=> {
        userChoice = "paper";
        computerChoice = computerChoicefunc();
        score(userChoice,computerChoice);

    })
    
    scissor.addEventListener("click", ()=> {
        userChoice = "scissor";
        computerChoice = computerChoicefunc();
        score(userChoice,computerChoice);

    
    })

    
}

userChoicefunc();
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

let sameChoice = (userChoice,computerChoice) => {
    if(userChoice!=0 || computerChoice!=0){
        msg.innerText = "It's tie ....";
        
    }
}

function score(userChoice, computerChoice){
    if(userChoice===computerChoice){
        sameChoice(userChoice,computerChoice);
    }
    else if(userChoice==="rock"){
        if(computerChoice === "paper"){
            msg.innerText = "You lost ! paper beats rock";
            comp_score.innerText++; 
        }
        else{
            msg.innerText = "You win ! rock beats scissor"
            user_score.innerText++;
        }
    }
    else if(userChoice==="paper"){
        if(computerChoice === "rock"){
            msg.innerText = "You win ! paper beats rock";
            user_score.innerText++; 
        }
        else{
            msg.innerText = "You lost ! scissor beats paper";
            comp_score.innerText++;
        }
    }
    else if(userChoice==="scissor"){
        if(computerChoice === "rock"){
            msg.innerText = "You lost ! rock beats scissor";
            comp_score.innerText++; 
        }
        else{
            msg.innerText = "You win ! scissor beats paper";
            user_score.innerText++;
        }
    }
}


