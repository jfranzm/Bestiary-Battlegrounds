/*----- constants -----*/
let buttons = document.getElementsByClassName('playerInput');
const attackInput = document.getElementById('attack').addEventListener('click', whosTurn);

function turnCounter() {
    turn++;
}
// determines who's turn is functioning currently 
function whosTurn(){
    let turnParity = (turn % 2 !== 0);
    (turnParity) ? playerAttack() : enemyAttack(); 
    turn ++;
}

// win condition
function playerWin() {
    if (enemyUnit.HP <= 0) {
        addLog(`You successfully defeated ${enemyUnit.unitName}!`)
        for (index=0; index < buttons.length; index++) {
            buttons[index].disabled = true;
        }
   }
}
// Lose condition
function playerLoss() {
    if (playerUnit.HP <= 0) {
        addLog(`${playerUnit.unitName} has fainted... you begin to blackout<br>`)
        for (index=0; index < buttons.length; index++) {
            buttons[index].disabled = true;
        }
    }
}
// game over condition OR battle end
function gameOver() {
    playerWin();
    playerLoss();
}
/*----- event listeners -----*/
function playerAttack(attackInput){
    dmgCalc(enemyUnit, playerUnit);
    defCalc(playerUnit);
    gameOver();
}

function enemyAttack(){
    dmgCalc(playerUnit, enemyUnit);
    gameOver();

}
