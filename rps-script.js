function getComputerChoice () {
    let random = Math.floor(Math.random()*3);
    switch (random) {
        case 0 :
            return "Rock";
        case 1 :
            return "Paper";
        default :
            return "Scissors";
    }
}

function playRound (playerChoice, computerChoice) {
    let result;
    if (playerChoice === computerChoice) {
        result = "draw";
        console.log(`It's a draw! You both played ${playerChoice}.`);
        return result;
    }
    switch (playerChoice) {
        case "Rock":
            if (computerChoice === "Paper") {
                console.log("You lose! Paper covers Rock.");
                result = "loss";
            } else {
                console.log("You win! Rock breaks Scissors.");
                result ="win";
            }            
            return result;
        case "Paper":
            if (computerChoice === "Scissors") {
                console.log("You lose! Scissors cut Paper.");
                result = "loss";
            } else {
                console.log("You win! Paper covers Rock.");
                result ="win";         
            }
            return result;
        default:
            if (computerChoice === "Rock") {
                console.log("You lose! Rock breaks Scissors.");
                result = "loss";
            } else {
                console.log("You win! Scissors cut Paper.");
                result ="win";         
            }
            return result;
    }
}

function playGame () {
    let tally = 0;
    for (let i = 1; i <=5 ; i++) {
        let playerChoice = prompt(`Round ${i} : Rock, Paper or Scissors?`);
        if (playerChoice.length < 4) {
            playerChoice = prompt(`Too short. Rock, Paper or Scissors?`)
        }
        playerChoice = playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1).toLowerCase();
        if (!(playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors")) {
            console.log ("Not a valid move.");
            i = i-1;
            continue;
        }
        console.log(`Round ${i}`);

        let result = playRound(playerChoice, getComputerChoice());
        switch (result) {
            case "win":
                tally = tally + 1;
                break;
            case "loss":
                tally = tally - 1;
                break;
            default:
                break;
        }
    }
    let finalResult = (tally >=1) ? "Yay, you won!" : (tally <= 1) ? "Oh no, you lost :(" : "It's a draw.";
    console.log (finalResult); 
}


playGame();