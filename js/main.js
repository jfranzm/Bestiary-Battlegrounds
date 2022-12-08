/*---- state variables -----*/
let playerUnit, enemyUnit;
// Unit class
class Unit {
    constructor(totalHP, HP, atkStat, options) {
        this.totalHP = totalHP;
        this.HP = HP;
        this.atkStat = atkStat;
        this.options = options;
    }
    dmgCalc(target) {
        target.HP - (Math.floor(Math.random()* this.atkStat))
        render();
    }
}

// playerUnit stats
playerUnit = new Unit(30, 30, 10, {
    // player options
    attack: dmgCalc(target)
})

// enemyUnit stats
enemyUnit = new Unit(40, 40, 6, {
    // enemy options
    attack: dmgCalc(target)
})
// turn counter
let turn = 1

/*----- functions -----*/
function turnCounter() {
    turn++;
}

// win condition
// function playerWin() {
//     if (playerUnit.HP <= 0) {

//     }
// }
/*----- event listners -----*/
function playerInput(){
    let choice = document.getElementsByClassName('playerInput');
    for (idx=0; idx < playerChoice.length; idx++) {
        playerChoice[idx].addEventListener('click', playerChoice);
    }
}


// let playerChoice = '';



// function playerTurn() {
//     if(turn % 2 !== 0){

//     }
// }
// function enemyTurn() {
//     if(turn ===)
// } 