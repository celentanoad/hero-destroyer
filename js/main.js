let GameManager = {
    startGame: function(monsterType) {
        this.resetPlayer(monsterType);
        this.setFight();
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
                        
        const getPlayerCard = document.querySelector(".player-card");
        const monsterImage = `../images/player-cards/${monsterType.toLowerCase()}.png`
        getPlayerCard.innerHTML = 
            `<img src=${monsterImage}>
            <div><h3>${monsterType}</h3>
            <p>Health: ${player.health}</p>
            <p>Mana: ${player.mana}</p>
            <p>Strength: ${player.strength}</p>
            <p>Agility: ${player.agility}</p>
            <p>Speed: ${player.speed}</p>
            </div>`
    },
    setFight: function() {

    }
}
//High = 70-100, med = 30-70, low = 0-30
//Cyclops: high health, high mana, high strenght, low agility, low speed
//Total = 11
//Dragon: med health, med mana, med strength, high agility, med speed
//Total = 11
//Troll: high health, med mana, high strength, med agility, low speed
//total = 11
//Wolf: med health, low mana, med strength, high agility, high speed
//total = 11
// this.health = health;
// this.mana = mana;
// this.strength = strength;
// this.agility = agility;
// this.speed = speed;