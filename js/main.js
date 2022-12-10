/*----- constants -----*/
let buttons = document.getElementsByClassName('playerInput');
const attackInput = document.getElementById('attack').addEventListener('click', playerInput);
/*---- state variables -----*/
let playerUnit, enemyUnit;
// Unit class
class Unit {
    constructor(unitName, totalHP, HP, atkStat, options) {
        this.unitName = unitName;
        this.totalHP = totalHP;
        this.HP = HP;
        this.atkStat = atkStat;
        this.options = options;
    }
    // dmgCalc(target) {
    //     target.HP - (Math.floor(Math.random()* this.atkStat))
    // }
}

// playerUnit stats
playerUnit = new Unit('Monkey', 30, 30, 10, {
    // player options
    // attack: this.dmgCalc(target)
})

// enemyUnit stats
enemyUnit = new Unit('Frog', 40, 40, 6, {
    // enemy options
    // attack: this.dmgCalc(target)
})
// turn counter
let turn = 1

/*----- functions -----*/
function turnCounter() {
    turn++;
}
// enable player buttons upon start up
function enableButtons() {
    buttons.disabled = false;
}
// player turn execution
function playerTurn() {
    if(turn % 2 !== 0){
        playerInput();
        turnCounter();
    }
}
// enemy turn execution
function enemyTurn() {
    if(turn % 2 === 0){
        // placeholder code until more options are included
        enemyUnit.options.attack;
    }
}
// win condition
function playerWin() {
    if (enemyUnit.HP <= 0) {
        addLog(`You successfully defeated ${enemyUnit.unitName}!`)
    }
}
// Lose condition
function playerLoss() {
    if (playerUnit.HP <= 0) {
        addLog(`${playerUnit.unitName} has fainted... you begin to blackout<br>`)
    }
}
// game over condition OR battle end
function gameOver() {
    playerWin();
    playerLoss();
}
// Displays text of what happened during round
function addLog(Text){
    let logContainer = document.getElementById('text-box');
    newLog = document.createElement('label');
    newLog.classList.add('Logs');
    newLog.innerHTML = Text;
    logContainer.appendChild(newLog);
}
/*----- event listners -----*/
function playerInput(buttons){
    console.log('its working');
    // if(buttons === playerUnit.options.attack) {
    //     // playerUnit.options.attack;
    //     // addLog(`${playerUnit.unitName} dealt ${playerUnit.dmgCalc()} damage!`)
    // }
}





