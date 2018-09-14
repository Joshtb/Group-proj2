var store = {
    items: {
        baseballBat: {
            itemId: 1,
            itemName: "Baseball Bat",
            itemType: "Weapon",
            price: 50,
            increase: 15,
            powerType: "attackHeavy",
        },
        steak: {
            itemId: 2,
            itemName: "Steak",
            itemType: "Food",
            price: 10,
            increase: 15,
            powerType: "health",
        },
        brassKnuckles: {
            itemId: 3,
            itemName: "Brass Knuckles",
            itemType: "Weapon",
            price: 10,
            increase: 5,
            powerType: "attackMed",
        },
        boxingGloves: {
            itemId: 4,
            itemName: "Boxing Gloves",
            itemType: "Weapon",
            price: 5,
            increase: 2,
            powerType: "attackLight",
        },
        Katana: {
            itemId: 5,
            itemName: "Katana",
            itemType: "Weapon",
            price: 100,
            increase: 50,
            powerType: "attackHeavy",
        }
    },
};
var myUpgrades = {
    health: null,
    attackLight: null,
    attackMed: null,
    attackHeavy: null,
    gp: null,
};
$(document).ready(function () {
    // building item html
    console.log("============", store.items.baseballBat)
    for (i in store.items) {
        console.log("======*********======", store.items[i])
        var TargetDiv = $(".targetDiv");
        var newItemDiv = $("<div>");
        var newItemName = $("<h3>");
        var newItemPrice = $("<h4>");
        var newItemButton = $("<button>");
        // <button type="button" class="btn btn-primary">Primary</button>
        var newButtonClass = "itemButton";
        $(newItemButton).addClass("btn", "btn-primary", "btn-lg", "itemButton");
        $(newItemButton).addClass(newButtonClass);
        $(newItemButton).text("Add to cart");
        $(newItemButton).data("price", store.items[i].price);
        $(newItemButton).data("increase", store.items[i].increase);
        $(newItemButton).data("powerType", store.items[i].powerType);
        $(newItemButton).data("name", store.items[i].itemName, );
        $(newItemName).text(store.items[i].itemName);
        $(newItemPrice).text("Cost: $" + store.items[i].price);
        $(newItemDiv).append(newItemName, newItemPrice, newItemButton);
        $(TargetDiv).append(newItemDiv);
    };
    $(".itemButton").on("click", function () {
        var thisPrice = $(this).data("price");
        var thisName = $(this).data("name");
        var thisIncrease = $(this).data("increase");
        var thisPowType = $(this).data("powerType");
        // player.gp = player.gp - thisPrice;
        // console.log($(this).data("price",));
        console.log(thisName, thisPrice, thisIncrease, thisPowType);
        switch (thisPowType) {
            case "health":
                myUpgrades.health = myUpgrades.health + thisIncrease;
                myUpgrades.gp = myUpgrades.gp - thisPrice;
                console.log(JSON.stringify(myUpgrades))
                break;
            case "attackLight":
                myUpgrades.attackLight = myUpgrades.attackLight + thisIncrease;
                myUpgrades.gp = myUpgrades.gp - thisPrice;
                console.log(JSON.stringify(myUpgrades))
                break;
            case "attackHeavy":
                myUpgrades.attackHeavy = myUpgrades.attackHeavy + thisIncrease;
                myUpgrades.gp = myUpgrades.gp - thisPrice;
                console.log(JSON.stringify(myUpgrades))
                break;
            case "attackMed":
                myUpgrades.attackMed = myUpgrades.attackMed + thisIncrease;
                myUpgrades.gp = myUpgrades.gp - thisPrice;
                console.log(JSON.stringify(myUpgrades))
                break;
            default:
                text = "I have never heard of that fruit...";
        };
        // console.log(player.gp);
    });
    $('.buyBtn').click(function () {
        var updatedPlayer = $(this).data("player");
        var upDatedGp = $(this).data("gp");
        var updatedHealth = $(this).data("health");
        var updatedAL = $(this).data("al");
        var updatedAM = $(this).data("am");
        var updatedAH = $(this).data("ah");
        // var updatedNL = $(this).data("numLight");
        // var updatedNM = $(this).data("numMed");
        // var updatedNH = $(this).data("numHeavy");

        console.log("current playerId: " + updatedPlayer + " | current gp: $" + upDatedGp + " | Current health: " + updatedHealth + " | Current light att: " + updatedAL + " | Current med att: " + updatedAM + " | Current heavy att: " + updatedAH);
        upDatedGp = upDatedGp + myUpgrades.gp;
        updatedHealth = updatedHealth + myUpgrades.health;
        updatedAL = updatedAL + myUpgrades.attackLight;
        updatedAM = updatedAM + myUpgrades.attackMed;
        updatedAH = updatedAH + myUpgrades.attackHeavy;
        console.log(upDatedGp, updatedHealth, updatedPlayer, updatedAL, updatedAM, updatedAH);
        var newPlayerStats = {
            health: updatedHealth,
            gp: upDatedGp,
            attackLight: updatedAL,
            attackMed: updatedAM,
            attackHeavy: updatedAH,
        };
        // Send the PUT request.
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
    })
});