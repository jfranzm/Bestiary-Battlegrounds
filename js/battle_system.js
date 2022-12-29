/*----- constants -----*/
// const attackInput = document.getElementById('attack').addEventListener('click', playerTurn);
// const defendInput = document.getElementById('defend').addEventListener('click', playerTurn);
// const skillInput = document.getElementById('skills').addEventListener('click', playerTurn);
// const focusInput = document.getElementById('focus').addEventListener('click', playerTurn);

const attackInput = document.getElementById('attack').addEventListener('click', Player_Selects);
const defendInput = document.getElementById('defend').addEventListener('click', Player_Selects);
const skillInput = document.getElementById('skills').addEventListener('click', Toggle_Skills_Menu);
const focusInput = document.getElementById('focus').addEventListener('click', Player_Selects);



function Toggle_Skills_Menu(){
    document.getElementById('skills-menu').classList.toggle('Toggle_Menu');
}



let Players_Move;
let Enemys_Move;

// What they want to do
function Player_Selects(){
    Players_Move = this.innerHTML;
    Enemy_Selects();
}

function Enemy_Selects(){
    let Options = ['attack','attack','attack','attack','attack','attack','attack','defend','skills','focus'];
    Enemys_Move = Options[Math.round(Math.random()*(Options.length-1))];
    Battle();
}


function Battle(){
    (Players_Move == 'defend') ? playerUnit.isDefending = 'true' : playerUnit.isDefending = 'false';
    (Enemys_Move == 'defend') ? enemyUnit.isDefending = 'true' : enemyUnit.isDefending = 'false';

    // console.log("Player Selects: " + String(Players_Move));
    console.log("Enemy Selects: " + String(Enemys_Move));

    // Process players move
    switch(Players_Move) {
        case "attack":
            Attack(playerUnit,enemyUnit);
            break;
        case "focus":
            break;
        default:
      }
    // Attack(playerUnit,enemyUnit);


    // Process enemys move
    switch(Enemys_Move) {
        case "attack":
            Attack(enemyUnit,playerUnit);
            break;
        case "focus":
            break;
        default:
      }

}



function Attack(Attacker,Receiver){
    let Full_Power_Attack = (Math.floor(Math.random() * (Attacker.atkStat)) + 1);
    let Reciever_Shielding = ((Math.floor(Math.random() * Receiver.defStat)) / 100) + 1;
    let Cummulative_Attack = Full_Power_Attack/Reciever_Shielding;
    if(Receiver.isDefending == 'true'){
        Cummulative_Attack = Cummulative_Attack / 3;        
    }
    Cummulative_Attack = Math.round(Cummulative_Attack);
    Receiver.HP = Receiver.HP - Cummulative_Attack;
    addLog(`${Attacker.unitName} dealt ${Cummulative_Attack} damage! <br>`);
    Update_HP_Bar(Receiver);
    return Cummulative_Attack;
}



function Update_HP_Bar(target){
    // dictionary for position of HP Bar
    const hpStatus = {
        0: 'red',
        1: 'yellow',
        2: 'green',
        3: 'green',
    }

    let quarterIndex = parseInt(Math.floor(target.HP / (target.totalHP / 4)));
    quarterIndex = (quarterIndex < 0) ? 0 : quarterIndex; 
    let barColour = hpStatus[quarterIndex];
    let barPercentage = (target.HP / target.totalHP) * 100; 
    // // if player is attacked update HP bar
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




















// function Player_Selects(playerUnit, enemyUnit){
//     console.log(this.innerHTML);
//     if(this.innerHTML == 'attack'){
//         if(enemyUnit.isDefending == false){
//             dmgCalc(enemyUnit, playerUnit);
//         }
//         else{defCalc()}
//     }
//     else if(this.innerHTML == 'defend'){
//         playerUnit.isDefending === true;
//         // addLog(`${playerUnit.unitName} is bracing itself... <br>`);
//         console.log(playerUnit.isDefending);
//     }    

// }


// determines who's turn is functioning currently 
// function whosTurn(){
//     // let turnParity = (turn % 2 !== 0);
//     // (turnParity) ? playerTurn() : enemyTurn(); 
//     if(turn % 2 !== 0){
//         playerTurn(attackInput, defendInput, skillInput, focusInput);
//         console.log(playerTurn)
//         turn ++;
//     }
//     else {
//         enemyTurn();
//         turn ++;
//     }
    
// }


// // win condition
// function playerWin() {
//     if (enemyUnit.HP <= 0) {
//         addLog(`You successfully defeated ${enemyUnit.unitName}!`)
//         for (index=0; index < buttons.length; index++) {
//             buttons[index].disabled = true;
//         }
//    }
// }
// // Lose condition
// function playerLoss() {
//     if (playerUnit.HP <= 0) {
//         addLog(`${playerUnit.unitName} has fainted... you begin to blackout<br>`)
//         for (index=0; index < buttons.length; index++) {
//             buttons[index].disabled = true;
//         }
//     }
// }
// // game over condition OR battle end
// function gameOver() {
//     playerWin();
//     playerLoss();
// }
// /*----- event listeners -----*/
// function playerTurn(attackInput, defendInput, skillInput, focusInput){
//     console.log("Attack");
//     if(attackInput){
//         dmgCalc(enemyUnit, playerUnit);
//         playerUnit.isAttacking === true;
//         console.log(playerUnit.isAttacking);

//     }
//     else if(defendInput){
//         defCalc(playerUnit, enemyUnit, playerUnit);
//         playerUnit.isAttacking === false;
//         console.log(playerUnit.isAttacking);
//     }
//     else if(skillInput){
//         skillsMenu(selectionBox);
//     }
//     else if(focusInput){
//         focusCalc(playerUnit);
//     }
//     gameOver();
//     turn ++;
// }



// function enemyTurn() {
//     const enemyOptions = {
//         enemyAttack: dmgCalc(playerUnit, enemyUnit),
//         enemyDefendAction: defCalc(enemyUnit, playerUnit, enemyUnit),
//     }
//     // function enemyAI(option) { 
//     //     let enemyAction = Object.keys(enemyOptions);
//     //     option[enemyAction[enemyAction.length * Math.random() << 0]];
//     // }
//     if(turn % 2 === 0){
//         // enemyAI(enemyOptions);
//         gameOver();
//     }
// }

// // const box = document.getElementById('skills');
// // box.addEventListener('click', skillsMenu);

// // function skillsMenu(event) {
// //   // Get the element that was clicked
// //   const element = event.target;
  
// //   // Double the size of the element
// //   const width = element.offsetWidth;
// //   const height = element.offsetHeight;
// //   element.style.width = 2 * width + 'px';
// //   element.style.height = 2 * height + 'px';
// // }
