const choiceButtons = document.querySelectorAll(".rps-player-choice");
const output = document.querySelector("#result-output");

choiceButtons.forEach(currentValue => currentValue.addEventListener("click", playRound));

let playerScore = 0;
let computerScore = 0;

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

function playRound (event) {
    let playerChoice = event.target.textContent;
    let computerChoice = getComputerChoice();
    
    const result = document.createElement("p");
    const score = document.createElement("p");
    
    if (playerChoice === computerChoice) {
        result.textContent = `It's a draw! You both played ${playerChoice}.`;
        output.appendChild(result);
        score.textContent = `Computer : ${computerScore} - ${playerScore} : Player`;
        output.appendChild(score);
        return;
    }
    switch (playerChoice) {
        case "Rock":
            if (computerChoice === "Paper") {
                result.textContent = "You lose this round! Paper covers Rock.";
                computerScore += 1;
                break;
            } else {
                result.textContent = "You win this round! Rock breaks Scissors.";
                playerScore += 1;
                break;
            }            
        case "Paper":
            if (computerChoice === "Scissors") {
                result.textContent = "You lose this round! Scissors cut Paper.";
                computerScore += 1;
                break;
            } else {
                result.textContent = "You win this round! Paper covers Rock.";
                playerScore += 1;
                break;       
            }
        default:
            if (computerChoice === "Rock") {
                result.textContent = "You lose this round! Rock breaks Scissors.";
                computerScore += 1;
                break;
            } else {
                result.textContent = "You win this round! Scissors cut Paper.";
                playerScore += 1;
                break;        
            }
    }
    output.appendChild(result);
    score.textContent = `Computer : ${computerScore} - ${playerScore} : Player`;
    output.appendChild(score);
    if (computerScore === 5) {
        const finalResult = document.createElement("p");
        finalResult.textContent = "Oh no, the computer won 5 times! You lose the game..."
        finalResult.style.fontWeight = 900;
        output.appendChild(finalResult);
        computerScore = 0;
        playerScore = 0;
    } else if (playerScore === 5) {
        const finalResult = document.createElement("p");
        finalResult.textContent = "Hurray! With five wins, you are the victor :)"
        output.appendChild(finalResult);
        finalResult.style.fontWeight = 900;
        computerScore = 0;
        playerScore = 0;
    }
    return;
}


// function playGame () {
//     let tally = 0;
//     for (let i = 1; i <=5 ; i++) {
//         let playerChoice = prompt(`Round ${i} : Rock, Paper or Scissors?`);
//         if (playerChoice.length < 4) {
//             playerChoice = prompt("Too short. Rock, Paper or Scissors?");
//         }
//         console.log(playerChoice);
//         playerChoice = playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1).toLowerCase();
//         if (!(playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors")) {
//             console.log ("Not a valid move.");
//             i = i-1;
//             continue;
//         }
//         console.log(`Round ${i}`);

//         let result = playRound(playerChoice, getComputerChoice());
//         switch (result) {
//             case "win":
//                 tally = tally + 1;
//                 break;
//             case "loss":
//                 tally = tally - 1;
//                 break;
//             default:
//                 break;
//         }
//     }
//     let finalResult = (tally >=1) ? "Yay, you won!" : (tally < 0) ? "Oh no, you lost :(" : "It's a draw.";
//     console.log (finalResult); 
// }
