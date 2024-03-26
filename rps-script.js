const choiceButtons = document.querySelectorAll(".rps-player-choice");
const output = document.querySelector("#result-output");

choiceButtons.forEach(currentValue => currentValue.addEventListener("click", playRound));


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
    console.log(playerChoice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    const result = document.createElement("p");
    
    if (playerChoice === computerChoice) {
        result.textContent = `It's a draw! You both played ${playerChoice}.`;
        output.appendChild(result);
        return;
    }
    switch (playerChoice) {
        case "Rock":
            if (computerChoice === "Paper") {
                result.textContent = "You lose! Paper covers Rock.";
                break;
            } else {
                result.textContent = "You win! Rock breaks Scissors.";
                break;
            }            
        case "Paper":
            if (computerChoice === "Scissors") {
                result.textContent = "You lose! Scissors cut Paper.";
                break;
            } else {
                result.textContent = "You win! Paper covers Rock.";
                break;       
            }
        default:
            if (computerChoice === "Rock") {
                result.textContent = "You lose! Rock breaks Scissors.";
                break;
            } else {
                result.textContent = "You win! Scissors cut Paper.";
                break;        
            }
    }
    output.appendChild(result);
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
