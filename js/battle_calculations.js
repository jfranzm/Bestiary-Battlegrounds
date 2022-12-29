 // calculation for damage delt
 function dmgCalc(target, attacker) {
    let dmgRedux = ((Math.floor(Math.random() * target.defStat)) / 100) + 1;
    let damageDealt = (Math.floor(Math.random() * (attacker.atkStat - 1 + 1)) + 1);

    target.HP = (target.HP - damageDealt) / dmgRedux;
    addLog(`${attacker.unitName} dealt ${damageDealt} damage! <br>`);
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
// calculate damage reduction when in defensive stance
function defCalc(target, attacker) {
    let dmgRedux = ((Math.floor(Math.random() * target.defStat)) / 100) + 1;
    let damageDealt = (Math.floor(Math.random() * (attacker.atkStat - 1 + 1)) + 1);

    target.HP = ((target.HP - damageDealt) / dmgRedux) * 0.66;
}

// calculate how much stamina is recovered to unit
function focusCalc(user) {
    let focusRecover = (Math.floor(Math.random() * (user.totalStamina - 1 + 1)) + 1);
    if(user.stamina + focusRecover <= user.totalStamina){
        user.stamina = user.stamina + focusRecover;
    }
    else {
        user.stamina = user.totalStamina;
    }

}
