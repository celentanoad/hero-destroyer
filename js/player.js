let player;

function Player(monsterType, health, mana, strength, agility, speed) {
    this.monsterType = monsterType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function () {
        //Determines who attacks first
        let playerSpeed = player.speed;
        let enemySpeed = enemy.speed;
    
        function playerAttack() {
            let baseDamage;
            if (player.mana > 0) {
                baseDamage = player.strength * player.mana / 1000;
            } else {
                baseDamage = player.strength * player.agility / 1000;
            }
            let randomCrit = Math.floor(Math.random() * Math.floor(10));
            let totalDamage = baseDamage + randomCrit;
            let hitNumber = Math.floor(Math.random() * Math.floor(player.agility / 10) /2) + 1;
            let playerTotalAttack = [totalDamage, hitNumber];
            return playerTotalAttack;
        }
        function enemyAttack() {
            let baseDamage;
            if (enemy.mana > 0) {
                baseDamage = enemy.strength * enemy.mana / 1000;
            } else {
                baseDamage = enemy.strength * enemy.agility / 1000;
            }
            let randomCrit = Math.floor(Math.random() * Math.floor(10));
            let totalDamage = baseDamage + randomCrit;
            let hitNumber = Math.floor(Math.random() * Math.floor(enemy.agility / 10) /2);
            let enemyTotalAttack = [totalDamage, hitNumber];
            return enemyTotalAttack;
        }
        function enemyCounterAttack() {
            setTimeout(function() {

                enemyHealth.innerHTML = `Health: ${enemy.health}`;
                //enemy responds with attack
                let enemyTotalAttack = enemyAttack();
                totalDamage = enemyTotalAttack[0] * enemyTotalAttack[1];
                player.health -= totalDamage;
                totalDamage ? 
                battlefield.innerHTML = `<div class="nes-container is-rounded is-dark">${enemy.heroType} attacked you for ${enemyTotalAttack[0]} ${enemyTotalAttack[1]} times!</div>`
                :
                battlefield.innerHTML = `<div class="nes-container is-rounded is-dark">${enemy.heroType} missed!</div>`
                if (player.health <= 0) {
                    //Display button to play again (currently not working)
                    header.innerHTML = `<div class="nes-container is-rounded is-dark">You Lose!</div><button type="button" class="nes-btn is-success">Play Again?</button>`
                    playerHealth.innerHTML = 'Health: 0';
                } else {
                    playerHealth.innerHTML = `Health: ${player.health}`;
                }
            }, 5000)
        }
        const battlefield = document.querySelector(".battlefield");
        const header = document.querySelector(".header");
        let playerHealth = document.querySelector('.player-health');
        let enemyHealth = document.querySelector('.enemy-health');
        if (playerSpeed > enemySpeed) {
            let playerTotalAttack = playerAttack();
            let totalDamage = playerTotalAttack[0] * playerTotalAttack[1];
            //Subtract from enemy health and update message
            enemy.health -= totalDamage;
            totalDamage ? 
                battlefield.innerHTML = `<div class="nes-container is-rounded is-dark">You attacked for ${playerTotalAttack[0]} ${playerTotalAttack[1]} times!</div>`
                :
                battlefield.innerHTML = `<div class="nes-container is-rounded is-dark">You missed!</div>`
            if (enemy.health <= 0) {
                //Display button to play again (currently not working)
                header.innerHTML = `<div class="nes-container is-rounded is-dark">You win!</div><button type="button" class="nes-btn is-success">Play Again?</button>`
                enemyHealth.innerHTML = 'Health: 0';
            } else {
                enemyCounterAttack();
            }
        }
    }
}