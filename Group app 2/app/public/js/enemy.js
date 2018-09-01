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
    // might be better to put in isAlive function
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

    //code to make attacks random
    this.randomAttack = function () {
        Math.floor(Math.random(attacks) * 4);
    }
}

// the good guys

var hero = {};
hero.saltySamuel = new Character("Salty Samuel", 600, 50, 150, 350, 20, 10, 5);
hero.toddlerTim = new Character("ToddlerTim", 800, 50, 170, 300, 20, 10, 5);

// the bad guys

var villan = {};
villan.jade = new Enemy("jade", 150, 50, 100, 180);
villan.sloppyJoe = new Enemy("Jade", 300, 10, 150, 200);
villan.sweetSamuel = new Enemy("Sweet Samuel", 400, 50, 180, 225);
villan.slipperyPete = new Enemy("Slippery Pete", 450, 100, 200, 200);
villan.bigDaddyMac = new Enemy("Big Daddy Mac", 500, 150, 250, 300);
villan.thatGuy = new Enemy("That Guy", 500, 150, 250, 300);
villan.baues = new Enemy("Baues", 1000, 250, 400, 500);

// Runs all functions in constructors 

hero.attack(villan);
hero.isAlive();
hero.shopPurchases();
hero.numAttacks();
hero.attack();
hero.printStats();

villan.attack(hero);
villan.isAlive();
villan.randomAttack();


// code to loop so game keeps going until death THERE cAN ONLY BE ONe!!!!!!!!!!!

while (hero.isAlive() === true && villan.isAlive() === true) {
    hero.attack(villan);
    villan.attack(hero);
}