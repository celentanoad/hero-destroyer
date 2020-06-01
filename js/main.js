const playerCard = document.querySelector(".player-card");
const header = document.querySelector(".header");
const actions = document.querySelector(".actions");
const battlefield = document.querySelector(".battlefield");
const enemyCard = document.querySelector(".enemy-card");

let GameManager = {
    startGame: function(monsterType) {
        this.resetPlayer(monsterType);
        this.setSearch();
    },
    resetPlayer: function(monsterType) {
        switch (monsterType) {
            case "Cyclops":
                player = new Player(monsterType, 95, 80, 75, 10, 20);
                break;
            case "Dragon":
                player = new Player(monsterType, 60, 65, 50, 80, 90);              
                break;
            case "Troll":
                player = new Player(monsterType, 75, 40, 85, 35, 20);
                break;
            case "Wolf":
                player = new Player(monsterType, 50, 10, 60, 100, 100);
        }      
        const monsterImage = `../images/player-cards/${monsterType.toLowerCase()}.png`;
        playerCard.innerHTML = 
            `<img src=${monsterImage}>
            <div><h3>${monsterType}</h3>
            <p>Health: ${player.health}</p>
            <p>Mana: ${player.mana}</p>
            <p>Strength: ${player.strength}</p>
            <p>Agility: ${player.agility}</p>
            <p>Speed: ${player.speed}</p>
            </div>`
    },
    setSearch: function() {
        header.innerHTML = '<p>Find a hero to fight!</p>';
        actions.innerHTML = '<a href="#" class="btn-search" onclick="GameManager.setFight()">Search for a hero</a>'
        battlefield.style.visibility = "visible";
    },
    setFight: function() {
        const enemy00 = new Enemy("Dwarf", 100, 40, 85, 10, 15);
        const enemy01 = new Enemy("Knight", 65, 10, 95, 45, 50);
        const enemy02 = new Enemy("Old Wizard", 20, 100, 15, 50, 30);
        const enemy03 = new Enemy("Silly Wizard", 65, 70, 25, 100, 100);
        const enemy04 = new Enemy("Strong Wizard", 70, 100, 20, 80, 60);
        const enemy05 = new Enemy("Warrior", 85, 0, 100, 20, 55);
        let randomEnemy = Math.floor(Math.random() * 6);
        switch (randomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            case 2:
                enemy = enemy02;
                break;
            case 3:
                enemy = enemy03;
                break;
            case 4:
                enemy = enemy04;
                break;
            case 5:
                enemy = enemy05;
                break;
        }
        const heroImage = `../images/enemy-cards/${enemy.heroType.toLowerCase().replace(/ /g, "")}.png`;
        header.innerHTML = `<p>${enemy.heroType} awaits your move!</p>`;
        actions.innerHTML = '<a href="#" class="btn-attack" onclick="PlayerMoves.calcAttack()">Attack!</a>'
        enemyCard.innerHTML = `<img src=${heroImage}>
        <div><h3>${enemy.heroType}</h3>
        <p>Health: ${enemy.health}</p>
        <p>Mana: ${enemy.mana}</p>
        <p>Strength: ${enemy.strength}</p>
        <p>Agility: ${enemy.agility}</p>
        <p>Speed: ${enemy.speed}</p>
        </div>`
    }
}
//High = 70-100, med = 30-70, low = 0-30
//High = 3, med =2, low =1 
//Dwarf: high health, med mana, high strength, low agility, low speed
//10
//Knight: med health, low mana, high strenght, med agility, med speed
//10
//Old Wizard: low health, high mana, low strength, med agility, low speed
//8
//Silly Wizard: med health, med mana, low strength, high agility, high speed
//11
//Strong Wizard: med health, high mana, low strength, high agility, med speed
//11
//Warrior: high health, low mana, high strength, low agaility, med speed
//10
// this.health = health;
// this.mana = mana;
// this.strength = strength;
// this.agility = agility;
// this.speed = speed;