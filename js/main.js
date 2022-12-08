let playerUnit, enemyUnit, background, HP;
let turn = 1
function turnCounter() {
    turn++;
}
console.log(turn);
let playerChoice = '';

let choice = document.getElementsByClassName('playerInput');
for (idx=0; idx < playerChoice.length; idx++) {
    playerChoice[idx].addEventListener('click', playerChoice);
}

// function playerTurn() {
//     if(turn % 2 !== 0){

//     }
// }
// function enemyTurn() {
//     if(turn ===)
// } 