// this is where all our enemys and hero will be

var updatedPlayer = null;
var updatedName = null;
var upDatedGp = null;
var updatedHealth = null;
var updatedAL = null;
var updatedAM = null;
var updatedAH = null;
var updatedNL = null;
var updatedNM = null;
var updatedNH = null;

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

            var newPlayerStats = {
                health: 1000,
                gp: 0,
                numLight: 100,
                numMed: 10,
                numHeavy: 3,
                attackLight: 10,
                attackMed: 50,
                attackHeavy: 75,
            };

            $.ajax("/api/players/" + updatedPlayer, {
                type: "PUT",
                data: newPlayerStats
            }).then(
                function () {
                    console.log();
                    // Reload the page to get the updated list
                    location.reload();
                }
            );

            window.location = "/GameOver"
        }
        console.log(this.name + "dead")
        return false;
    }

    // for attacking the enemy
    this.attackL = function (Enemy) {
        Enemy.health = Enemy.health - this.attackLight;
        updatedAL = this.attackLight;

    };
    this.attackM = function (Enemy) {
        Enemy.health = Enemy.health - this.attackMed;
        updatedAM = this.attackMed;
    };
    this.attackH = function (Enemy) {
        Enemy.health = Enemy.health - this.attackHeavy;
        updatedAH = this.attackHeavy;
    };


    //when getting hit by enemy
    this.gettingHit = function () {
        Character.attackLight -= this.health;
        Character.attackMed -= this.health;
        Character.attackHeavy -= this.health;
        updatedHealth = this.health;
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
        this.numLight = this.numLight - 1;
        updatedNL = this.numLight;
    };
    this.minusAttackMed = function () {
        this.numMed = this.numMed - 1;
        updatedNM = this.numMed;
    };
    this.minusAttackHeavy = function () {
        this.numHeavy = this.numHeavy - 1;
        updatedNH = this.numHeavy;
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
    this.money = Math.floor(Math.random() * 20) + 5;


    // checks to see if enemy is alive and send to walking page
    this.isAliveV = function (Character) {
        if (this.health > 0) {
            console.log(this.name + "is living")
            return true;
        } else {

            Character.money = Character.money + this.money;
            upDatedGp = Character.money;
            console.log("current playerId: " + updatedPlayer + " | current gp: $" + upDatedGp + " | Current health: " + updatedHealth + " | Current light att: " + updatedAL + " | Current med att: " + updatedAM + " | Current heavy att: " + updatedAH);

            var newPlayerStats = {
                health: updatedHealth,
                gp: upDatedGp,
                numLight: updatedNL,
                numMed: updatedNM,
                numHeavy: updatedNH,
                attackLight: updatedAL,
                attackMed: updatedAM,
                attackHeavy: updatedAH,
            };

            $.ajax("/api/players/" + updatedPlayer, {
                type: "PUT",
                data: newPlayerStats
            }).then(
                function () {
                    console.log();
                    // Reload the page to get the updated list
                    location.reload();
                }
            );

            window.location = "/stage1"

        }
        console.log(this.name + "dead")
        return false;
    };

    this.isAliveV2 = function (Character) {
        if (this.health > 0) {
            console.log(this.name + "is living")
            return true;
        } else {

            Character.money = Character.money + this.money;
            upDatedGp = Character.money;
            console.log("current playerId: " + updatedPlayer + " | current gp: $" + upDatedGp + " | Current health: " + updatedHealth + " | Current light att: " + updatedAL + " | Current med att: " + updatedAM + " | Current heavy att: " + updatedAH);

            var newPlayerStats = {
                health: updatedHealth,
                gp: upDatedGp,
                numLight: updatedNL,
                numMed: updatedNM,
                numHeavy: updatedNH,
                attackLight: updatedAL,
                attackMed: updatedAM,
                attackHeavy: updatedAH,
            };

            $.ajax("/api/players/" + updatedPlayer, {
                type: "PUT",
                data: newPlayerStats
            }).then(
                function () {
                    console.log();
                    // Reload the page to get the updated list
                    location.reload();
                }
            );

            window.location = "/stage3"

        }
        console.log(this.name + "dead")
        return false;
    };

    // when you wanna body the Hero 
    this.enemyAttack = function (char) {
        char.health -= this.attackValue;
        console.log('Salty', char);
        updatedHealth = char.health;

    };

    //code to make attacks random
    this.attackValue = Math.floor(Math.random() * 50) + 10
};

this.isAliveV3 = function (Character) {
    if (this.health > 0) {
        console.log(this.name + "is living")
        return true;
    } else {

        Character.money = Character.money + this.money;
        upDatedGp = Character.money;
        console.log("current playerId: " + updatedPlayer + " | current gp: $" + upDatedGp + " | Current health: " + updatedHealth + " | Current light att: " + updatedAL + " | Current med att: " + updatedAM + " | Current heavy att: " + updatedAH);

        var newPlayerStats = {
            health: updatedHealth,
            gp: upDatedGp,
            numLight: updatedNL,
            numMed: updatedNM,
            numHeavy: updatedNH,
            attackLight: updatedAL,
            attackMed: updatedAM,
            attackHeavy: updatedAH,
        };

        $.ajax("/api/players/" + updatedPlayer, {
            type: "PUT",
            data: newPlayerStats
        }).then(
            function () {
                console.log();
                // Reload the page to get the updated list
                location.reload();
            }
        );

        window.location = "/stage4"

    }
    console.log(this.name + "dead")
    return false;
};

this.isAliveV4 = function (Character) {
    if (this.health > 0) {
        console.log(this.name + "is living")
        return true;
    } else {

        Character.money = Character.money + this.money;
        upDatedGp = Character.money;
        console.log("current playerId: " + updatedPlayer + " | current gp: $" + upDatedGp + " | Current health: " + updatedHealth + " | Current light att: " + updatedAL + " | Current med att: " + updatedAM + " | Current heavy att: " + updatedAH);

        var newPlayerStats = {
            health: updatedHealth,
            gp: upDatedGp,
            numLight: updatedNL,
            numMed: updatedNM,
            numHeavy: updatedNH,
            attackLight: updatedAL,
            attackMed: updatedAM,
            attackHeavy: updatedAH,
        };

        $.ajax("/api/players/" + updatedPlayer, {
            type: "PUT",
            data: newPlayerStats
        }).then(
            function () {
                console.log();
                // Reload the page to get the updated list
                location.reload();
            }
        );

        window.location = "/stage5"

    }
    console.log(this.name + "dead")
    return false;
};

this.isAliveVB = function (Character) {
    if (this.health > 0) {
        console.log(this.name + "is living")
        return true;
    } else {

        Character.money = Character.money + this.money;
        upDatedGp = Character.money;
        console.log("current playerId: " + updatedPlayer + " | current gp: $" + upDatedGp + " | Current health: " + updatedHealth + " | Current light att: " + updatedAL + " | Current med att: " + updatedAM + " | Current heavy att: " + updatedAH);

        var newPlayerStats = {
            health: updatedHealth,
            gp: upDatedGp,
            numLight: updatedNL,
            numMed: updatedNM,
            numHeavy: updatedNH,
            attackLight: updatedAL,
            attackMed: updatedAM,
            attackHeavy: updatedAH,
        };

        $.ajax("/api/players/" + updatedPlayer, {
            type: "PUT",
            data: newPlayerStats
        }).then(
            function () {
                console.log();
                // Reload the page to get the updated list
                location.reload();
            }
        );

        window.location = "/bossfight"

    }
    console.log(this.name + "dead")
    return false;
};



// var
// the good guys

var hero = {};
hero.toddlerTim = new Character("ToddlerTim", 800, 50, 170, 300, 20, 10, 5, 0);
hero.saltySamuel = new Character("Salty Samuel", 800, 50, 150, 350, 20, 10, 5, 0);
console.log(hero);
// the bad guys

var villan = {};
villan.jade = new Enemy("Jade", 150, 10);
villan.slipperyPete = new Enemy("Slippery Pete", 450, 100);
villan.bigDaddyMac = new Enemy("Big Daddy Mac", 500, 15);
villan.slimeeee = new Enemy("Slimeee", 400, 10);
villan.baues = new Enemy("Baues", 1000, 250, 400, 500);

$(document).ready(function () {

    $("#statsBtn").on("click", function () {
        event.preventDefault();
        updatedPlayer = $(this).data("player");
        updatedName = $(this).data("name");
        upDatedGp = $(this).data("gp");
        updatedHealth = $(this).data("health");
        updatedAL = $(this).data("al");
        updatedAM = $(this).data("am");
        updatedAH = $(this).data("ah");
        updatedNL = $(this).data("nl");
        updatedNM = $(this).data("nm");
        updatedNH = $(this).data("nh");

        // hero display
        $("#heroName").append(updatedName);
        $("#healthDis").append(updatedHealth);
        $("#lightDis").append(updatedNL);
        $("#medDis").append(updatedNM);
        $("#heavyDis").append(updatedNH);
        $("#moneyDis").append(upDatedGp);
        hero.yourChar = new Character(updatedPlayer, updatedHealth, updatedAL, updatedAM, updatedAH, updatedNL, updatedNM, updatedNH, upDatedGp);
        console.log(JSON.stringify(hero.yourChar));
        $("#statsBtn").hide();

        //villan display
        $("#villanName").text(villan.jade.name);
        $("#vhealthDis").append(villan.jade.health)
    });

    $("#lightBtn").on("click", function () {
        event.preventDefault();
        hero.yourChar.attackL(villan.jade);
        hero.yourChar.minusAttacklight();
        hero.yourChar.numAttacksLight();
        villan.jade.enemyAttack(hero.yourChar);
        $("#healthDis").text("health: " + hero.yourChar.health)
        $("#lightDis").text("Number of light attacks left: " + hero.yourChar.numLight);
        $("#vhealthDis").text("health: " + villan.jade.health);
        villan.jade.isAliveV(hero.yourChar)
        hero.yourChar.isAlive();
        console.log("---------", hero.yourChar);
    });

    $("#medBtn").on("click", function () {
        event.preventDefault();
        hero.yourChar.attackM(villan.jade);
        hero.yourChar.minusAttackMed();
        hero.yourChar.numAttacksMed();
        villan.jade.enemyAttack(hero.yourChar);
        $("#healthDis").text("health: " + hero.yourChar.health);
        console.log("Hero-----", hero.yourChar)
        $("#medDis").text("Number of Medium attacks left: " + hero.yourChar.numMed);
        $("#vhealthDis").text("health: " + villan.jade.health);
        villan.jade.isAliveV(hero.yourChar)
        hero.yourChar.isAlive();
        console.log("---------", hero.yourChar);
    });

    $("#heavyBtn").on("click", function () {
        event.preventDefault();
        hero.yourChar.minusAttackHeavy();
        hero.yourChar.numAttacksHeavy();
        hero.yourChar.attackH(villan.jade);
        villan.jade.enemyAttack(hero.yourChar);
        $("#healthDis").text("health: " + hero.yourChar.health)
        $("#heavyDis").text("Number of Heavy attacks left: " + hero.yourChar.numHeavy);
        $("#vhealthDis").text("health: " + villan.jade.health);
        villan.jade.isAliveV(hero.yourChar)
        hero.yourChar.isAlive();
        console.log("---------", hero.yourChar);
    });
})

////////// slippery pete ////////////////////////////////////////////////

$(document).ready(function () {

    $("#statsBtn2").on("click", function () {
        event.preventDefault();
        updatedPlayer = $(this).data("player");
        updatedName = $(this).data("name");
        upDatedGp = $(this).data("gp");
        updatedHealth = $(this).data("health");
        updatedAL = $(this).data("al");
        updatedAM = $(this).data("am");
        updatedAH = $(this).data("ah");
        updatedNL = $(this).data("nl");
        updatedNM = $(this).data("nm");
        updatedNH = $(this).data("nh");


        // hero display
        $("#heroName").append(updatedName);
        $("#healthDis").append(updatedHealth);
        $("#lightDis").append(updatedNL);
        $("#medDis").append(updatedNM);
        $("#heavyDis").append(updatedNH);
        $("#moneyDis").append(upDatedGp);
        $("#statsBtn2").hide();

        hero.yourChar = new Character(updatedPlayer, updatedHealth, updatedAL, updatedAM, updatedAH, updatedNL, updatedNM, updatedNH, upDatedGp);
        console.log(JSON.stringify(hero.yourChar));

        //villan display
        $("#villanName").text(villan.slipperyPete.name);
        $("#vhealthDis").append(villan.slipperyPete.health)
    });

    $("#lightBtn").on("click", function () {
        event.preventDefault();
        hero.yourChar.attackL(villan.slipperyPete);
        hero.yourChar.minusAttacklight();
        hero.yourChar.numAttacksLight();
        villan.slipperyPete.enemyAttack(hero.yourChar);
        $("#healthDis").text("health: " + hero.yourChar.health)
        $("#lightDis").text("Number of light attacks left: " + hero.yourChar.numLight);
        $("#vhealthDis").text("health: " + villan.slipperyPete.health);
        villan.slipperyPete.isAliveV2(hero.yourChar)
        hero.yourChar.isAlive();
        console.log("---------", hero.yourChar);
    });

    $("#medBtn").on("click", function () {
        event.preventDefault();
        hero.yourChar.attackM(villan.slipperyPete);
        hero.yourChar.minusAttackMed();
        hero.yourChar.numAttacksMed();
        villan.slipperyPete.enemyAttack(hero.yourChar);
        $("#healthDis").text("health: " + hero.yourChar.health);
        console.log("Hero-----", hero.yourChar)
        $("#medDis").text("Number of Medium attacks left: " + hero.yourChar.numMed);
        $("#vhealthDis").text("health: " + villan.slipperyPete.health);
        villan.slipperyPete.isAliveV2(hero.yourChar)
        hero.yourChar.isAlive();
        console.log("---------", hero.yourChar);
    });

    $("#heavyBtn").on("click", function () {
        event.preventDefault();
        hero.yourChar.minusAttackHeavy();
        hero.yourChar.numAttacksHeavy();
        hero.yourChar.attackH(villan.slipperyPete);
        villan.slipperyPete.enemyAttack(hero.yourChar);
        $("#healthDis").text("health: " + hero.yourChar.health)
        $("#heavyDis").text("Number of Heavy attacks left: " + hero.yourChar.numHeavy);
        $("#vhealthDis").text("health: " + villan.slipperyPete.health);
        villan.slipperyPete.isAliveV2(hero.yourChar)
        hero.yourChar.isAlive();
        console.log("---------", hero.yourChar);
    });

})


////////////////// bigDaddyMac //////////////

$(document).ready(function () {

    $("#statsBtn3").on("click", function () {
        event.preventDefault();
        updatedPlayer = $(this).data("player");
        updatedName = $(this).data("name");
        upDatedGp = $(this).data("gp");
        updatedHealth = $(this).data("health");
        updatedAL = $(this).data("al");
        updatedAM = $(this).data("am");
        updatedAH = $(this).data("ah");
        updatedNL = $(this).data("nl");
        updatedNM = $(this).data("nm");
        updatedNH = $(this).data("nh");

        // hero display
        $("#heroName").append(updatedName);
        $("#healthDis").append(updatedHealth);
        $("#lightDis").append(updatedNL);
        $("#medDis").append(updatedNM);
        $("#heavyDis").append(updatedNH);
        $("#moneyDis").append(upDatedGp);
        $("#statsBtn3").hide();

        hero.yourChar = new Character(updatedPlayer, updatedHealth, updatedAL, updatedAM, updatedAH, updatedNL, updatedNM, updatedNH, upDatedGp);
        console.log(JSON.stringify(hero.yourChar));

        //villan display
        $("#villanName").text(villan.bigDaddyMac.name);
        $("#vhealthDis").append(villan.bigDaddyMac.health)
    });

    $("#lightBtn").on("click", function () {
        event.preventDefault();
        hero.yourChar.attackL(villan.bigDaddyMac);
        hero.yourChar.minusAttacklight();
        hero.yourChar.numAttacksLight();
        villan.bigDaddyMac.enemyAttack(hero.yourChar);
        $("#healthDis").text("health: " + hero.yourChar.health)
        $("#lightDis").text("Number of light attacks left: " + hero.yourChar.numLight);
        $("#vhealthDis").text("health: " + villan.bigDaddyMac.health);
        villan.bigDaddyMac.isAliveV3(hero.yourChar)
        hero.yourChar.isAlive();
        console.log("---------", hero.yourChar);
    });

    $("#medBtn").on("click", function () {
        event.preventDefault();
        hero.yourChar.attackM(villan.bigDaddyMac);
        hero.yourChar.minusAttackMed();
        hero.yourChar.numAttacksMed();
        villan.bigDaddyMac.enemyAttack(hero.yourChar);
        $("#healthDis").text("health: " + hero.yourChar.health);
        console.log("Hero-----", hero.yourChar)
        $("#medDis").text("Number of Medium attacks left: " + hero.yourChar.numMed);
        $("#vhealthDis").text("health: " + villan.bigDaddyMac.health);
        villan.bigDaddyMac.isAliveV3(hero.yourChar)
        hero.yourChar.isAlive();
        console.log("---------", hero.yourChar);
    });

    $("#heavyBtn").on("click", function () {
        event.preventDefault();
        hero.yourChar.minusAttackHeavy();
        hero.yourChar.numAttacksHeavy();
        hero.yourChar.attackH(villan.bigDaddyMac);
        villan.bigDaddyMac.enemyAttack(hero.yourChar);
        $("#healthDis").text("health: " + hero.yourChar.health)
        $("#heavyDis").text("Number of Heavy attacks left: " + hero.yourChar.numHeavy);
        $("#vhealthDis").text("health: " + villan.bigDaddyMac.health);
        villan.bigDaddyMac.isAliveV3(hero.yourChar)
        hero.yourChar.isAlive();
        console.log("---------", hero.yourChar);
    });

})


////// Slime ///////////////////////////////////////////

$(document).ready(function () {

    $("#statsBtn4").on("click", function () {
        event.preventDefault();
        updatedPlayer = $(this).data("player");
        updatedName = $(this).data("name");
        upDatedGp = $(this).data("gp");
        updatedHealth = $(this).data("health");
        updatedAL = $(this).data("al");
        updatedAM = $(this).data("am");
        updatedAH = $(this).data("ah");
        updatedNL = $(this).data("nl");
        updatedNM = $(this).data("nm");
        updatedNH = $(this).data("nh");

        // hero display
        $("#heroName").append(updatedName);
        $("#healthDis").append(updatedHealth);
        $("#lightDis").append(updatedNL);
        $("#medDis").append(updatedNM);
        $("#heavyDis").append(updatedNH);
        $("#moneyDis").append(upDatedGp);
        $("#statsBtn4").hide();

        hero.yourChar = new Character(updatedPlayer, updatedHealth, updatedAL, updatedAM, updatedAH, updatedNL, updatedNM, updatedNH, upDatedGp);
        console.log(JSON.stringify(hero.yourChar));

        //villan display
        $("#villanName").text(villan.slimeeee.name);
        $("#vhealthDis").append(villan.slimeeee.health)
    });

    $("#lightBtn").on("click", function () {
        event.preventDefault();
        hero.yourChar.attackL(villan.slimeeee);
        hero.yourChar.minusAttacklight();
        hero.yourChar.numAttacksLight();
        villan.slimeeee.enemyAttack(hero.yourChar);
        $("#healthDis").text("health: " + hero.yourChar.health)
        $("#lightDis").text("Number of light attacks left: " + hero.yourChar.numLight);
        $("#vhealthDis").text("health: " + villan.slimeeee.health);
        villan.slimeeee.isAliveV4(hero.yourChar)
        hero.yourChar.isAlive();
        console.log("---------", hero.yourChar);
    });

    $("#medBtn").on("click", function () {
        event.preventDefault();
        hero.yourChar.attackM(villan.slimeeee);
        hero.yourChar.minusAttackMed();
        hero.yourChar.numAttacksMed();
        villan.slimeeee.enemyAttack(hero.yourChar);
        $("#healthDis").text("health: " + hero.yourChar.health);
        console.log("Hero-----", hero.yourChar)
        $("#medDis").text("Number of Medium attacks left: " + hero.yourChar.numMed);
        $("#vhealthDis").text("health: " + villan.slimeeee.health);
        villan.slimeeee.isAliveV4(hero.yourChar)
        hero.yourChar.isAlive();
        console.log("---------", hero.yourChar);
    });

    $("#heavyBtn").on("click", function () {
        event.preventDefault();
        hero.yourChar.minusAttackHeavy();
        hero.yourChar.numAttacksHeavy();
        hero.yourChar.attackH(villan.slimeeee);
        villan.slimeeee.enemyAttack(hero.yourChar);
        $("#healthDis").text("health: " + hero.yourChar.health)
        $("#heavyDis").text("Number of Heavy attacks left: " + hero.yourChar.numHeavy);
        $("#vhealthDis").text("health: " + villan.slimeeee.health);
        villan.slimeeee.isAliveV4(hero.yourChar)
        hero.yourChar.isAlive();
        console.log("---------", hero.yourChar);
    });

})

/////////////////////////////////////boss/////////////////////////

$(document).ready(function () {

    $("#statsBtnB").on("click", function () {
        event.preventDefault();
        updatedPlayer = $(this).data("player");
        updatedName = $(this).data("name");
        upDatedGp = $(this).data("gp");
        updatedHealth = $(this).data("health");
        updatedAL = $(this).data("al");
        updatedAM = $(this).data("am");
        updatedAH = $(this).data("ah");
        updatedNL = $(this).data("nl");
        updatedNM = $(this).data("nm");
        updatedNH = $(this).data("nh");

        // hero display
        $("#heroName").append(updatedName);
        $("#healthDis").append(updatedHealth);
        $("#lightDis").append(updatedNL);
        $("#medDis").append(updatedNM);
        $("#heavyDis").append(updatedNH);
        $("#moneyDis").append(upDatedGp);
        $("#statsBtnB").hide();

        hero.yourChar = new Character(updatedPlayer, updatedHealth, updatedAL, updatedAM, updatedAH, updatedNL, updatedNM, updatedNH, upDatedGp);
        console.log(JSON.stringify(hero.yourChar));

        //villan display
        $("#villanName").text(villan.baues.name);
        $("#vhealthDis").append(villan.baues.health)
    });

    $("#lightBtn").on("click", function () {
        event.preventDefault();
        hero.yourChar.attackL(villan.baues);
        hero.yourChar.minusAttacklight();
        hero.yourChar.numAttacksLight();
        villan.baues.enemyAttack(hero.yourChar);
        $("#healthDis").text("health: " + hero.yourChar.health)
        $("#lightDis").text("Number of light attacks left: " + hero.yourChar.numLight);
        $("#vhealthDis").text("health: " + villan.baues.health);
        villan.baues.isAliveVB(hero.yourChar)
        hero.yourChar.isAlive();
        console.log("---------", hero.yourChar);
    });

    $("#medBtn").on("click", function () {
        event.preventDefault();
        hero.yourChar.attackM(villan.baues);
        hero.yourChar.minusAttackMed();
        hero.yourChar.numAttacksMed();
        villan.baues.enemyAttack(hero.yourChar);
        $("#healthDis").text("health: " + hero.yourChar.health);
        console.log("Hero-----", hero.yourChar)
        $("#medDis").text("Number of Medium attacks left: " + hero.yourChar.numMed);
        $("#vhealthDis").text("health: " + villan.baues.health);
        villan.baues.isAliveVB(hero.yourChar)
        hero.yourChar.isAlive();
        console.log("---------", hero.yourChar);
    });

    $("#heavyBtn").on("click", function () {
        event.preventDefault();
        hero.yourChar.minusAttackHeavy();
        hero.yourChar.numAttacksHeavy();
        hero.yourChar.attackH(villan.baues);
        villan.baues.enemyAttack(hero.yourChar);
        $("#healthDis").text("health: " + hero.yourChar.health)
        $("#heavyDis").text("Number of Heavy attacks left: " + hero.yourChar.numHeavy);
        $("#vhealthDis").text("health: " + villan.baues.health);
        villan.baues.isAliveV(hero.yourChar)
        hero.yourChar.isAlive();
        console.log("---------", hero.yourChar);
    });

});

$("#doSomething").css({
    "float": "right"
});