/*----- constants -----*/
let buttons = document.getElementsByClassName('playerInput');
// const attackInput = document.getElementById('attack').addEventListener('click', playerAttack);
const attackInput = document.getElementById('attack').addEventListener('click', whosTurn);

function turnCounter() {
    turn++;
}
 // calculation for damage delt
function dmgCalc(target, attacker) {
    console.log(playerUnit.HP);
    let damageDealt = (Math.floor(Math.random() * attacker.atkStat));
    target.HP = target.HP - damageDealt;
    addLog(`${attacker.unitName} dealt ${damageDealt} damage! <br>`);
    // dictionary for position of HP Bar
    const hpStatus = {
        0: 'red',
        1: 'yellow',
        2: 'green',
        3: 'green',
    }

    let barColour = hpStatus[parseInt(Math.floor(target.HP / (target.totalHP / 4)))];
    let barPercentage = (target.HP / target.totalHP) * 100; 
    // if player is attacked update HP bar
    if(target == playerUnit) {
        const playerHPBar = document.getElementById('player-HPbar');
        playerHPBar.style.backgroundImage = `linear-gradient(to right, ${barColour} ${barPercentage}%, rgba(0,0,0,0) ${barPercentage}%)`;
    }
    // if enemy is attacked update HP bar
    else{
        const enemyHPBar = document.getElementById('enemy-HPbar');
        enemyHPBar.style.backgroundImage = `linear-gradient(to right, ${barColour} ${barPercentage}%, rgba(0,0,0,0) ${barPercentage}%)`;
    }
}



function whosTurn(){
    let turnParity = (turn % 2 === 0);
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
    gameOver();
}

function enemyAttack(){
    // console.log("The frog hit");
    dmgCalc(playerUnit, enemyUnit);
    gameOver();

}
