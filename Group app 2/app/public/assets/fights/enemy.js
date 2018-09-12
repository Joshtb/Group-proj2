// this is where all our enemys and hero will be

function Character(name, health, attackLight, attackMed, attackHeavy, numLight, numMed, numHeavy, money) {
    this.name = name;
    this.health = health;
    this.attackLight = attackLight;
    this.attackMed = attackMed;
    this.attackHeavy = attackHeavy;
    this.numLight = numLight;
    this.numMed = numMed;
    this.numHeavy = numHeavy;
    this.money = money;

    //prints the charters stats
    this.printStats = function () {
        // dont know what to put in here yet ... so yeah
        // could use handle bars 
    };

    // check to see if hero is alive or not
    this.isAlive = function () {
        if (this.health > 0) {
            console.log(this.name + "is living")
            return true;
        } else {
            window.location = "/GameOver"
        }
        console.log(this.name + "dead")
        return false;
    }

    // for attacking the enemy
    this.attackL = function (Enemy) {
        Enemy.health = Enemy.health - this.attackLight;

    };
    this.attackM = function (Enemy) {
        Enemy.health = Enemy.health - this.attackMed;
    };
    this.attackH = function (Enemy) {
        Enemy.health = Enemy.health - this.attackHeavy;
    };


    //when getting hit by enemy
    this.gettingHit = function () {
        Character.attackLight -= this.health;
        Character.attackMed -= this.health;
        Character.attackHeavy -= this.health;
    }

    // gets rid of button once out of moves 
    this.numAttacksLight = function () {
        if (this.numLight < 0) {
            $("#lightBtn").hide();
        }
    };
    this.numAttacksMed = function () {
        if (this.numMed < 0) {
            $("#medBtn").hide();
        }
    };
    this.numAttacksHeavy = function () {
        if (this.numHeavy < 0) {
            $("#heavyBtn").hide();
        }
    };

    // gets rid of one attack once attack is used 
    this.minusAttacklight = function () {
        this.numLight = this.numLight - 1
    };
    this.minusAttackMed = function () {
        this.numMed = this.numMed - 1
    };
    this.minusAttackHeavy = function () {
        this.numHeavy = this.numHeavy - 1
    };
    // // for purchasing items from store
    // this.shopPurchases = function () {
    //     this.health += 400;
    //     this.attackLight += 100
    //     this.attackLight += 150
    //     this.attackHeavy += 200;
    //     // conection.query 
    // }
};


function Enemy(name, health, attack) {

    this.name = name;
    this.health = health;
    this.attack = attack;
    this.money = Math.floor(Math.random() * 100) + 50;


    // checks to see if enemy is alive and send to walking page
    this.isAliveV = function (Character) {
        if (this.health > 0) {
            console.log(this.name + "is living")
            return true;
        } else {

            var updatedPlayer = this.name;
            var upDatedGp = this.money;
            var updatedHealth = this.health;
            var updatedAL = this.attackLight;
            var updatedAM = this.attackMed;
            var updatedAH = this.attackHeavy;

            // var updatedNL = $(this).data("numLight");
            // var updatedNM = $(this).data("numMed");
            // var updatedNH = $(this).data("numHeavy");

            console.log("current playerId: " + updatedPlayer + " | current gp: $" + upDatedGp + " | Current health: " + updatedHealth + " | Current light att: " + updatedAL + " | Current med att: " + updatedAM + " | Current heavy att: " + updatedAH);
            // upDatedGp = upDatedGp + myUpgrades.gp;
            // updatedHealth = updatedHealth + myUpgrades.health;
            // updatedAL = updatedAL + myUpgrades.attackLight;
            // updatedAM = updatedAM + myUpgrades.attackMed;
            // updatedAH = updatedAH + myUpgrades.attackHeavy;
            // console.log(upDatedGp, updatedHealth, updatedPlayer, updatedAL, updatedAM, updatedAH);
            // var newPlayerStats = {
            //     health: updatedHealth,
            //     gp: upDatedGp,
            //     attackLight: updatedAL,
            //     attackMed: updatedAM,
            //     attackHeavy: updatedAH,
            // };

            // $.ajax("/api/players/" + updatedPlayer, {
            //     type: "PUT",
            //     data: newPlayerStats
            // }).then(
            //     function () {
            //         console.log();
            //         // Reload the page to get the updated list
            //         location.reload();
            //     }
            // );
            //     name: this.name,
            //     health: this.health,

            // }).then(function (data) {
            //     console.log("We got out hero saved", data)
            // })

            Character.money = Character.money + this.money;
            window.location = "/home"

        }
        console.log(this.name + "dead")
        return false;
    };

    // when you wanna body the Hero 
    this.enemyAttack = function (char) {
        char.health -= this.attackValue;
        console.log('Salty', char);
    };

    //code to make attacks random
    this.attackValue = Math.floor(Math.random() * 300) + 100
}

// the good guys

var hero = {};
hero.toddlerTim = new Character("ToddlerTim", 800, 50, 170, 300, 20, 10, 5, 0);
hero.saltySamuel = new Character("Salty Samuel", 800, 50, 150, 350, 20, 10, 5, 0);
console.log(hero);
// the bad guys

var villan = {};
villan.jade = new Enemy("Jade", 150, 10);
// villan.slipperyPete = new Enemy("Slippery Pete", 450, 100, 200, 200);
// villan.bigDaddyMac = new Enemy("Big Daddy Mac", 500, 150, 250, 300);
// villan.baues = new Enemy("Baues", 1000,  250, 400, 500);



//************* unused code *************

// Runs all functions in constructors 

// hero.saltySamuel.attack(villan.jade);
// console.log("--------------", villan.jade)
// hero.isAlive();
// hero.shopPurchases();
// hero.numAttacks();
// hero.attack();
// hero.printStats();

// villan.attack(hero);
// villan.isAlive();
// villan.randomAttack();


// code to loop so game keeps going until death THERE cAN ONLY BE ONe!!!!!!!!!!!
// might not be needed
// while (hero.saltySamuel.isAlive() === true && villan.isAlive() === true) {
//     hero.attack(villan);
//     villan.attack(hero);
// }




// function Enemy(name, health, attackLight, attackMed, attackHeavy) {

//     // checks to see if enemy is alive (might not need)
//     this.isAlive = function () {
//         if (this.health > 0) {
//             console.log(this.name + "is living")
//             return true;
//         } else {
//             // code for going back to game once enemy dies and giving Character more money
//         }
//         console.log(this.name + "dead")
//         return false;
//     };

//     // when you wanna body the Hero 
//     this.enemyAttack = function (Character) {
//         Character.attackLight -= this.health;
//         Character.attackMed -= this.health;
//         Character.attackHeavy -= this.health
//     }

//     // for when the villan gets attacked
//     this.enemyGettingHit = function () {
//         Enemy.attackLight -= this.health;
//         Enemy.attackMed -= this.health;
//         Enemy.attackHeavy -= this.health
//     }
//     //********************* need help setting up random attacks****************************//

//     //code to make attacks random
//     this.randomAttack = function (hero, villan) {

//         Math.floor(Math.random(attacks) * 4);

//     }
// }