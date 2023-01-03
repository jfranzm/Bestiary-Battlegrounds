// Calculates how much damage is made against opposing unit
function attack(attacker,receiver){
    let fullPowerAttack = (Math.floor(Math.random() * (attacker.atkStat)) + 1);
    let defStatCalc = ((Math.floor(Math.random() * receiver.defStat)) / 100) + 1;
    let cummulativeAttack = fullPowerAttack/defStatCalc;
    // reduces damage recieved by 1/3 if receiver is defending
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
// restores target's HP by 1/4 of totalHP at the cost of 10 MP
function heal(target){
    if(target.MP >= 10){
        addLog(`${target.unitName} used heal! <br>`);
        target.HP = Math.min(target.HP + (target.totalHP / 4),target.totalHP);
        updateHPBar(target);
        target.MP = Math.floor(target.MP - 10);
        updateMPBar(target);
        healSoundFX();
    }
    else{
        addLog(`${target.unitName} doesn't have enough MP! <br>`);
    }
}

// restores user's MP by 1/4 of totalMP
function focus(user){
    addLog(`${user.unitName} is heighting their focus... <br>`);
    user.MP = parseInt(Math.min(user.MP + (user.totalMP / 4),user.totalMP));
    updateMPBar(user);
    manaRestoreSoundFX();
    addLog(`${user.unitName} recovered ${user.MP} <br>`);
}

// skill that damages target twice in a row at the cost of 4 MP
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