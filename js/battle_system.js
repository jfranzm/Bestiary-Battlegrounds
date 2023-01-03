/*----- constants -----*/
let playerMove, enemyMove;
let isGameover = false;
document.getElementById('play').addEventListener('click', playGame);
document.getElementById('attack').addEventListener('click', playerSelection);
document.getElementById('defend').addEventListener('click', playerSelection);
document.getElementById('skills').addEventListener('click', toggleSkillsMenu);
document.getElementById('back').addEventListener('click', toggleSkillsMenu);
document.getElementById('focus').addEventListener('click', playerSelection);
document.getElementById('double-hit').addEventListener('click', playerSelection);
document.getElementById('heal').addEventListener('click', playerSelection);

let buttons = document.getElementsByTagName('button');

/*----- functions -----*/
function toggleSkillsMenu(){
    document.getElementById('skills-menu').classList.toggle('toggleMenu');
    selectionSound();
}
// updateHPBar(playerUnit)
function playGame(){
    document.getElementById('title-screen').classList.toggle('startGame');
    selectionSound();
}

// Player's input
function playerSelection(){
    playerMove = this.innerHTML;
    selectionSound();
    enemySelection();
}

// Enemy AI
function enemySelection(){
    let options = ['attack','attack','attack','attack','attack','attack','attack','defend','heal','focus'];
    enemyMove = options[Math.round(Math.random()*(options.length-1))];
    battle();
}

// Main body of battle system
function battle(){
    // Checks if player is in defensive state
    (playerMove == 'defend') ? playerUnit.isDefending = 'true' : playerUnit.isDefending = 'false';
    if(playerMove == 'defend'){
        addLog(`${playerUnit.unitName} is bracing itself... <br>`)
    }
    // Checks if enemy is in defensive state
    (enemyMove == 'defend') ? enemyUnit.isDefending = 'true' : enemyUnit.isDefending = 'false';
    if(enemyMove == 'defend'){
        addLog(`${enemyUnit.unitName} is bracing itself... <br>`)
    }
    // Process players move
    isGameover = gameOver();
    if(!isGameover){
    switch(playerMove) {
        case "attack":
            attack(playerUnit,enemyUnit);
            playerAttackAnimation();
            break;
        case "double-hit":
            doubleHit(playerUnit, enemyUnit);
            break;
        case "heal":
            heal(playerUnit);
            break;
        case "focus":
            focus(playerUnit);
            break;
        default:
      }
    }
    isGameover = gameOver();
    let enemyThinkTime = 1000;
    
    let selectionBox = document.getElementById('selection-box');
    selectionBox.classList.remove('moveLeftAnimation');
    void selectionBox.offsetWidth;
    selectionBox.classList.add('moveLeftAnimation');

    setTimeout(function(){
    // Process enemys move
    if(!isGameover){
    switch(enemyMove) {
        case "attack":
            addLog(`${enemyUnit.unitName} is attacking! <br>`)
            attack(enemyUnit,playerUnit);
            enemyAttackAnimation();
            break;
        case "heal":
            heal(enemyUnit);
            break;
        case "focus":
            focus(enemyUnit);
            break;
        default:
    }
}

      }, enemyThinkTime);

}



function attack(attacker,receiver){
    let fullPowerAttack = (Math.floor(Math.random() * (attacker.atkStat)) + 1);
    let defStatCalc = ((Math.floor(Math.random() * receiver.defStat)) / 100) + 1;
    let cummulativeAttack = fullPowerAttack/defStatCalc;
    if(receiver.isDefending == 'true'){
        cummulativeAttack = cummulativeAttack / 3;        
    }
    cummulativeAttack = Math.round(cummulativeAttack);
    receiver.HP = receiver.HP - cummulativeAttack;
    addLog(`${attacker.unitName} dealt ${cummulativeAttack} damage! <br>`);
    updateHPBar(receiver);
    isGameover = gameOver();

    if(isGameover){
        let enemyHP = enemyUnit.HP;
        let playerHP = playerUnit.HP;
        (enemyHP > playerHP) ? addLog(`${playerUnit.unitName} has fainted... you begin to blackout <br>`) : addLog(`You successfully defeated ${enemyUnit.unitName}! <br>`)
    }
    return cummulativeAttack;
}

function heal(target){
    if(target.MP >= 10){
        addLog(`${target.unitName} used heal! <br>`);
        target.HP = Math.min(target.HP + (target.totalHP / 4),target.totalHP);
        updateHPBar(target);
        target.MP = Math.floor(target.MP - 10);
        updateMPBar(target);
    }
    else{
        addLog(`${target.unitName} doesn't have enough MP! <br>`);
    }
}

function focus(user){
    addLog(`${user.unitName} is heighting their focus... <br>`);
    user.MP = parseInt(Math.min(user.MP + (user.totalMP / 4),user.totalMP));
    console.log(user.MP);
    updateMPBar(user);
    addLog(`${user.unitName} recovered ${user.MP} <br>`);

}
function doubleHit(attacker, target){
    if(attacker.MP >= 4){
        addLog(`${attacker.unitName} used double-hit! <br>`);
        attack(attacker,target);
        attack(attacker,target);
        playerAttackAnimation();
        attacker.MP = Math.floor(attacker.MP - 4);
        updateMPBar(attacker);
    }
    else{
        addLog(`${target.unitName} doesn't have enough MP! <br>`);
    }
}

function updateHPBar(target){
    // dictionary for position of HP Bar
    const hpStatus = {
        0: 'red',
        1: 'yellow',
        2: 'green',
        3: 'green',
    }

    let quarterIndex = parseInt(Math.floor(target.HP / (target.totalHP / 4)));
    quarterIndex = Math.max(quarterIndex,0);
    quarterIndex = Math.min(quarterIndex,3);
    let barColour = hpStatus[quarterIndex];


    let barPercentage = parseFloat((target.HP / target.totalHP) * 100); 
  
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
function updateMPBar(user){
    let barPercentage = parseFloat((user.MP / user.totalMP) * 100); 
    // // if player is using skill, update MP bar
    if(user == playerUnit) {
        const playerMPBar = document.getElementById('player-MPbar');
        playerMPBar.style.backgroundImage = `linear-gradient(to right, lightSkyBlue ${barPercentage}%, rgba(0,0,0,0) ${barPercentage}%)`;
    }
    // if enemy is using skill, update MP bar
    else{
        const enemyMPBar = document.getElementById('enemy-MPbar');
        enemyMPBar.style.backgroundImage = `linear-gradient(to right, lightSkyBlue ${barPercentage}%, rgba(0,0,0,0) ${barPercentage}%)`;
    }
}

function enemyAttackAnimation() {
    let enemySprite = document.getElementById("enemySprite");
    let playerSprite = document.getElementById("playerSprite");
    enemySprite.classList.remove("enemySmack", "enemyDamaged");
    void enemySprite.offsetWidth;
    void playerSprite.offsetWidth;
    enemySprite.classList.add("enemySmack");
    playerSprite.classList.add("playerDamaged");
}

function playerAttackAnimation() {
    let enemySprite = document.getElementById("enemySprite");
    let playerSprite = document.getElementById("playerSprite");
    playerSprite.classList.remove("playerSmack", "playerDamaged");
    void playerSprite.offsetWidth;
    void enemySprite.offsetWidth;
    playerSprite.classList.add("playerSmack");
    enemySprite.classList.add("enemyDamaged");
}

// game over condition OR battle end

function gameOver() {
    let enemyHP = enemyUnit.HP;
    let playerHP = playerUnit.HP;
    if((enemyHP <= 0) || (playerHP <= 0)){
        for (index=0; index < buttons.length; index++) {
            buttons[index].disabled = true;
        }
        return true;
    }
    else {
        return false;
    }
}

// function playerWin(){
//     if (enemyUnit.HP <= 0) {
//         addLog(`You successfully defeated ${enemyUnit.unitName}! <br>`)
//         for (index=0; index < buttons.length; index++) {
//             buttons[index].disabled = true;
//         }
//     }
// }

// function enemyWin(){
//     if (playerUnit.HP <= 0) {
//         addLog(`${playerUnit.unitName} has fainted... you begin to blackout <br>`)
//         for (index=0; index < buttons.length; index++) {
//             buttons[index].disabled = true;
//         }
//     }
// }
// /*----- event listeners -----*/
