/*---- state variables -----*/
let playerUnit, enemyUnit;
// Unit class
class Unit {
    constructor(unitName, totalHP, HP, totalMP, MP, atkStat, defStat, isDefending) {
        this.unitName = unitName;
        this.totalHP = totalHP;
        this.HP = HP;
        this.totalMP = totalMP;
        this.MP = MP;
        this.atkStat = atkStat;
        this.defStat = defStat;
        this.isDefending = isDefending;
    }
}

// playerUnit stats
playerUnit = new Unit('Monkey', 30, 30, 20, 20, 10, 8, false)

// enemyUnit stats
enemyUnit = new Unit('Frog', 40, 40, 15, 15, 10, 10, false)
// turn counter
let turn = 1

/*----- functions -----*/
// enable player buttons upon start up
function enableButtons() {
    buttons.disabled = false;
}
// Displays text of what happened during round
function addLog(Text){
    let textBox = document.getElementById('text-box');
    newLog = document.createElement('label');
    newLog.classList.add('Logs');
    newLog.innerHTML = Text;
    textBox.appendChild(newLog);
    textBox.scrollTop = textBox.scrollHeight;
}

function selectionSound(){
    let sound = document.getElementById('selection-sound');
    sound.volume = 0.5;
    sound.play();
}
function damageSound(){
    let sound = document.getElementById('damage-sound');
    sound.volume = 0.5;
    sound.play();
}

function backgroundMusic(){
    let bgMusic = document.getElementById('background-music');
    bgMusic.volume = 0.7;
    bgMusic.play();
}

function healSoundFX(){
    let sound = document.getElementById('heal-sound');
    sound.volume = 0.5;
    sound.play();
}

function manaRestoreSoundFX(){
    let sound = document.getElementById('mana-restore-sound');
    sound.volume = 0.5;
    sound.play();
}
