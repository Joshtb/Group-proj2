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
    };

    // check to see if hero is alive or not
    this.isAlive = function () {
        if (this.health > 0) {
            console.log(this.name + "is living")
            return true;
        } else {
            // code to kill charter here and send to kill screen
        }
        console.log(this.name + "dead")
        return false;
    }

    // for attacking the enemy
    this.attack = function (Enemy) {
        Enemy.attackLight -= this.health;
        Enemy.attackMed -= this.health;
        Enemy.attackHeavy -= this.health;
    };

    // gets rid of button once out of moves 
    this.numAttacks = function () {
        // need help setting DRY code to use only one variable ******************************************
        if (this.numAttacks < 0) {
            $("#lightBtn").hide();
            $("#medBtn").hide();
            $("#HeavyBtn").hide();
        }
    };

    // for purchasing items from store
    this.shopPurchases = function () {
        this.health += 400;
        this.attackLight += 100
        this.attackLight += 150
        this.attackHeavy += 200;

    }

    //****************************** Implement code to add money to Character and functions****************/
};


function Enemy(name, health, attackLight, attackMed, attackHeavy) {

    // checks to see if enemy is alive (might not need)
    this.isAlive = function () {
        if (this.health > 0) {
            console.log(this.name + "is living")
            return true;
        } else {
            // code for going back to game once enemy dies and giving Character more money
        }
        console.log(this.name + "dead")
        return false;
    };

    // when you wanna body the Hero 
    this.enemyAttack = function (Character) {
        Character.attackLight -= this.health;
        Character.attackMed -= this.health;
        Character.attackHeavy -= this.health;

    }

    //*********************need help setting up random attacks****************************//
    this.randomAttack = function () {
        Math.floor(Math.random(attacks) * 4);
    }
}
// the good guys
// try to store all characters in one var
// var heros = {
var saltySamuel = new Character("Salty Samuel", 600, 50, 150, 350, 20, 10, 5);
var toddlerTim = new Character("ToddlerTim", 800, 50, 170, 300, 20, 10, 5);
// }

// the bad guys
// store all enemys in one variable
var jade = new Enemy("jade", 150, 50, 100, 180);
var sloppyJoe = new Enemy("jade", 300, 10, 150, 200);
var sweetSamuel = new Enemy("sweetSamuel", 400, 50, 180, 225);


// code to loop so game keeps going until death THERE cAN ONLY BE ONe!!!!!!!!!!!

while (hero.isAlive() === true && villan.isAlive() === true) {
    hero.attack(villan);
    villan.attack(hero);
}




////////////////////////////////////// early code that got scrapped //////////////////////

// var hero = {
//     "Big Jack": {
//         name: "Big Jack",
//         health: 500,
//         attackLight: 100,
//         attackMedium: 150,
//         attackHeavy: 300,
//     },
//     "Sweet Jane": {
//         name: "Big Jack",
//         health: 800,
//         attackLight: 100,
//         attackMedium: 120,
//         attackHeavy: 250,
//     }
// };

// var villan = {
//     "Sloppy Joe": {
//         name: "Sloppy Joe",
//         health: 200,
//         attackLight: 50,
//         attackHeavy: 150,
//     },
//     "Shifty Samuel": {
//         name: "Shifty Samuel",
//         health: 300,
//         attackLight: 100,
//         attackHeavy: 250,
//     },
//     "Dirty Dan": {
//         name: "Drity Dan",
//         health: 350,
//         attackLight: 100,
//         attackHeavy: 250,
//     },
//     "Spicy Lola": {
//         name: "Spicy Lola",
//         health: 300,
//         attackHeavy: 400,
//     },
//     "Le Boss": {
//         name: "Le Boss",
//         health: 1000,
//         attackLight: 200,
//         attackMedium: 350,
//         attackHeavy: 500,
//     },
// };

// var attacker;
// var fighters = [];
// var defender;
// var turnCount = 1;

// var initalizeGame = function () {

// }