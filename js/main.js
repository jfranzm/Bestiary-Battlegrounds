let playerUnit, enemyUnit, background, HP;
// Unit class
class Unit {
    constructor(HP, atkStat, options) {
        this.HP = HP;
        this.atkStat = atkStat;
        this.options = options;
    }
}

let turn = 1
function turnCounter() {
    turn++;
}
// let playerChoice = '';

// function playerInput(){
//     let choice = document.getElementsByClassName('playerInput');
//     for (idx=0; idx < playerChoice.length; idx++) {
//         playerChoice[idx].addEventListener('click', playerChoice);
//     }
// }

// function playerTurn() {
//     if(turn % 2 !== 0){

//     }
// }
// function enemyTurn() {
//     if(turn ===)
// } 