let human_score = 0
let comp_score = 0

function comp_choice(){
    let rand = Math.floor(Math.random() * 10)
    let choice
    if(rand >=0 && rand <= 3){
        choice = "rock"
    }
    else if(rand >= 4 && rand <= 7){
        choice = "paper"
    }
    else{
        choice = "scissor"
    }

    return choice
}

function human_choice(){
    let choice = prompt("Enter your choice (Rock, Paper, Scissor): ")
    choice = choice.toLowerCase()
    return choice
}

function playRound(hc, cc){
    if(hc === "rock" && cc === "scissor"){
        human_score++
        alert(`You chose :${hc} \nComputer chose: ${cc} \nYou Win!`)
    }
    else if(hc === "paper" && cc === "rock"){
        human_score++
        alert(`You chose :${hc} \nComputer chose: ${cc} \nYou Win!`)
    }
    else if(hc === "scissor" && cc === "paper"){
        human_score++
        alert(`You chose :${hc} \nComputer chose: ${cc} \nYou Win!`)
    }
    else if(hc === cc){
        alert(`You chose :${hc} \nComputer chose: ${cc} \nIt's a Tie!`)
    }
    else{
        comp_score++
        alert(`You chose :${hc} \nComputer chose: ${cc} \nYou Loose!`)
    }
}

function playGame(){
    while(human_score + comp_score < 5){
        playRound(human_choice(), comp_choice())
    }
    alert(`Your Score: ${human_score} \nComputer Score: ${comp_score}`)
    if(human_score > comp_score){
        alert("You won the Game!")
    }
    else{
        alert("Computer won the Game!")
    }
}

playGame()