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
        const header = document.querySelector(".header");
        const attackBtn = document.querySelector('.is-warning');
        const battlefield = document.querySelector(".battlefield");
        attackBtn.classList.add('is-disabled');
        attackBtn.classList.remove('is-warning');
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
            enemyHealth.innerHTML = `Health: ${enemy.health}`;
            setTimeout(function() {
                battlefield.innerHTML = `<div class="nes-container is-rounded is-dark">The ${enemy.heroType} responds with an attack!</div>`
            }, 3000)
            setTimeout(function() {
                //enemy responds with attack
                let enemyTotalAttack = enemyAttack();
                totalDamage = enemyTotalAttack[0] * enemyTotalAttack[1];
                player.health -= totalDamage;
                totalDamage ? 
                battlefield.innerHTML = `<div class="nes-container is-rounded is-dark">${enemy.heroType} attacked you for ${enemyTotalAttack[0]} ${enemyTotalAttack[1]} times!</div>`
                :
                battlefield.innerHTML = `<div class="nes-container is-rounded is-dark">${enemy.heroType} missed!</div>`
                if (player.health <= 0) {
                    setTimeout(function() {
                        //Display button to play again (currently not working)
                        header.innerHTML = `<button type="button" class="nes-btn is-warning">Play Again?</button>`
                        battlefield.innerHTML = `<div class="nes-container is-rounded is-dark">The ${enemy.heroType} loots what they can from your dying body (gross) and prances off into the distance. As the world fades to black, you can see a flickering light above the ${enemy.heroType}'s head that reads: "Level Up!". You were unable to stop the ${enemy.heroType} from completing their quest.</div>`
                        playerHealth.innerHTML = 'Health: 0';
                    }, 2000)
                } else {
                    playerHealth.innerHTML = `Health: ${player.health}`;
                    attackBtn.classList.remove('is-disabled');
                    attackBtn.classList.add('is-warning');
                }
            }, 6000)
        }
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
                setTimeout(function() {
                    //Display button to play again (currently not working)
                    header.innerHTML = `<button type="button" class="nes-btn is-success">Play Again?</button>`;
                    battlefield.innerHTML = `<div class="nes-container is-rounded is-dark"> You successfully stopped the ${enemy.heroType} from completing their quest!</div>`
                    enemyHealth.innerHTML = 'Health: 0';
                }, 2000)
            } else {
                enemyCounterAttack();
            }
        }
    }
}