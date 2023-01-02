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
