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
                player = new Player(monsterType, 95, 80, 75, 40, 20);
                break;
            case "Dragon":
                player = new Player(monsterType, 60, 65, 50, 80, 90);              
                break;
            case "Troll":
                player = new Player(monsterType, 75, 40, 85, 65, 20);
                break;
            case "Wolf":
                player = new Player(monsterType, 50, 10, 60, 100, 100);
        }      
        const monsterImage = `../images/player-cards/${monsterType.toLowerCase()}.png`;
        playerCard.innerHTML = 
            `<img src=${monsterImage}>
            <div class="nes-container is-rounded is-dark"><h3>${monsterType}</h3>
            <p class="player-health">Health: ${player.health}</p>
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
        const enemy00 = new Enemy("Dwarf", 100, 40, 85, 30, 15);
        const enemy01 = new Enemy("Knight", 65, 10, 95, 55, 50);
        const enemy02 = new Enemy("Old Wizard", 20, 100, 15, 50, 30);
        const enemy03 = new Enemy("Silly Wizard", 65, 70, 25, 100, 100);
        const enemy04 = new Enemy("Strong Wizard", 70, 100, 20, 80, 60);
        const enemy05 = new Enemy("Warrior", 85, 0, 100, 60, 55);
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
        header.innerHTML = `<p>A ${enemy.heroType} approaches!</p>`;
        actions.innerHTML = '<a href="#" type="button" class="nes-btn is-warning" onclick="PlayerMoves.calcAttack()">Attack!</a>'
        battlefield.innerHTML = `<div class="nes-container is-rounded is-dark">The ${enemy.heroType} awaits your move!</div>`
        enemyCard.innerHTML = `<img src=${heroImage}>
        <div class="nes-container is-rounded is-dark"><h3>${enemy.heroType}</h3>
        <p class="enemy-health">Health: ${enemy.health}</p>
        <p>Mana: ${enemy.mana}</p>
        <p>Strength: ${enemy.strength}</p>
        <p>Agility: ${enemy.agility}</p>
        <p>Speed: ${enemy.speed}</p>
        </div>`
    }
}
