/*----- constants -----*/
let playerMove, enemyMove;

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
}
// updateHPBar(playerUnit)
function playGame(){
    document.getElementById('title-screen').classList.toggle('startGame');
}

// Player's input
function playerSelection(){
    playerMove = this.innerHTML;
    console.log(playerMove)
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
    // Checks if enemy is in defensive state
    (enemyMove == 'defend') ? enemyUnit.isDefending = 'true' : enemyUnit.isDefending = 'false';
    console.log("Enemy Selects: " + String(enemyMove));

    // Process players move
    switch(playerMove) {
        case "attack":
            attack(playerUnit,enemyUnit);
            playerAttackAnimation();
            break;
        case "double-hit":
            addLog(`${playerUnit.unitName} used double-hit! <br>`)
            attack(playerUnit,enemyUnit);
            attack(playerUnit,enemyUnit);
            playerAttackAnimation();
            break;
        case "heal":
            heal(playerUnit);
            break;
        case "focus":
            break;
        default:
      }
      
    let enemyThinkTime = 2000;
    
    let selectionBox = document.getElementById('selection-box');
    selectionBox.classList.remove('moveLeftAnimation');
    void selectionBox.offsetWidth;
    selectionBox.classList.add('moveLeftAnimation');

    setTimeout(function(){
    // Process enemys move
    switch(enemyMove) {
        case "attack":
            attack(enemyUnit,playerUnit);
            enemyAttackAnimation();
            break;
        case "heal":
            heal(enemyUnit);
            break;
        case "focus":
            break;
        default:
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
    return cummulativeAttack;
}

function heal(target){
    addLog(`${target.unitName} used heal! <br>`);
    target.HP = Math.min(target.HP + (target.totalHP / 4),target.totalHP);
    updateHPBar(target);
    target.MP = Math.min(target.MP - (target.totalMP / 2),0);
    updateMPBar(target);
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
    document.getElementById("enemySprite").classList.remove("enemySmack");
    void document.getElementById("enemySprite").offsetWidth;
    document.getElementById("enemySprite").classList.add("enemySmack");
    document.getElementById("playerSprite").classList.remove("playerDamaged");
    void document.getElementById("playerSprite").offsetWidth;
    document.getElementById("playerSprite").classList.add("playerDamaged");
}

function playerAttackAnimation() {
    document.getElementById("playerSprite").classList.remove("playerSmack");
    void document.getElementById("playerSprite").offsetWidth;
    document.getElementById("playerSprite").classList.add("playerSmack");
    document.getElementById("enemySprite").classList.remove("enemyDamaged");
    void document.getElementById("enemySprite").offsetWidth;
    document.getElementById("enemySprite").classList.add("enemyDamaged");
}

// game over condition OR battle end
function gameOver() {
    if (enemyUnit.HP <= 0) {
        addLog(`You successfully defeated ${enemyUnit.unitName}!`)
        for (index=0; index < buttons.length; index++) {
            buttons[index].disabled = true;
        }
        return true;
   }
   if (playerUnit.HP <= 0) {
    addLog(`${playerUnit.unitName} has fainted... you begin to blackout<br>`)
    for (index=0; index < buttons.length; index++) {
        buttons[index].disabled = true;
    }
    return true;
}
    return false;
}
// /*----- event listeners -----*/
