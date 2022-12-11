/*----- constants -----*/
let buttons = document.getElementsByClassName('playerInput');
const attackInput = document.getElementById('attack').addEventListener('click', playerAttack);
/*---- state variables -----*/
let playerUnit, enemyUnit;
// Unit class
class Unit {
    constructor(unitName, totalHP, HP, atkStat) {
        this.unitName = unitName;
        this.totalHP = totalHP;
        this.HP = HP;
        this.atkStat = atkStat;
    }
}

// playerUnit stats
playerUnit = new Unit('Monkey', 30, 30, 10)

// enemyUnit stats
enemyUnit = new Unit('Frog', 40, 40, 6)
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
// calculation for damage delt
function dmgCalc(target, attacker) {
    let damageDealt = (Math.floor(Math.random() * attacker.atkStat));
    console.log(target.HP);
    console.log(damageDealt);
    target.HP = target.HP - damageDealt;
    addLog(`${attacker.unitName} dealt ${damageDealt} damage! <br>`);
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
        buttons.disabled = true;
    }
}
// Lose condition
function playerLoss() {
    if (playerUnit.HP <= 0) {
        addLog(`${playerUnit.unitName} has fainted... you begin to blackout<br>`)
        buttons.disabled = true;
    }
}
// game over condition OR battle end
function gameOver() {
    playerWin();
    playerLoss();
}
// Displays text of what happened during round
function addLog(Text){
    let textBox = document.getElementById('text-box');
    newLog = document.createElement('label');
    newLog.classList.add('Logs');
    newLog.innerHTML = Text;
    textBox.appendChild(newLog);
}



/*----- event listeners -----*/
function playerAttack(attackInput){
    console.log('its working');
    dmgCalc(enemyUnit, playerUnit);


    console.log(enemyUnit.HP)
}





