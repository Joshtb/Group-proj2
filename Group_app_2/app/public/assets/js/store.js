var store = {
    items: {
        baseballBat: {
            itemId: 1,
            itemName: "Baseball Bat",
            itemType: "Weapon",
            price: 50,
            increase: 15,
            powerType: "attackHeavy",
            imgLocation: "https://s8.postimg.cc/s9si5l7q9/icons-09.png",
        },
        steak: {
            itemId: 2,
            itemName: "Steak",
            itemType: "Food",
            price: 10,
            increase: 15,
            powerType: "health",
            imgLocation: "https://s8.postimg.cc/ktt8jscb5/icons-07.png",
        },
        brassKnuckles: {
            itemId: 3,
            itemName: "Brass Knuckles",
            itemType: "Weapon",
            price: 10,
            increase: 5,
            powerType: "attackMed",
            imgLocation: "https://s8.postimg.cc/z08zezkld/icons-02.png",
        },
        boxingGloves: {
            itemId: 4,
            itemName: "Boxing Gloves",
            itemType: "Weapon",
            price: 5,
            increase: 2,
            powerType: "attackLight",
            imgLocation: "https://s8.postimg.cc/vgn1p7zw1/icons-03.png",
        },
        Katana: {
            itemId: 5,
            itemName: "Katana",
            itemType: "Weapon",
            price: 100,
            increase: 50,
            powerType: "attackHeavy",
            imgLocation: "https://s8.postimg.cc/82f2d9n3l/icons-06.png",
        }
    },
};


var myUpgrades = {
    health: 0,
    attackLight: 0,
    attackMed: 0,
    attackHeavy: 0,
    gp: 0,
};

$(document).ready(function () {

    // building item html
    for (i in store.items) {
        var TargetDiv = $(".targetDiv");
        var newItemDiv = $("<div>");
        var newItemName = $("<h3>");
        var newItemPrice = $("<h4>");
        var newItemButton = $("<button>");
        var newItemImg = $("<img>");
        $(newItemImg).attr("src", store.items[i].imgLocation);
        $(newItemImg).attr("width", "100px");
        $(newItemImg).attr("height", "100px");
        // <button type="button" class="btn btn-primary">Primary</button>
        var newButtonClass = "itemButton";
        $(newItemButton).addClass("btn", "btn-primary", "btn-lg", "itemButton");
        $(newItemButton).addClass(newButtonClass);
        $(newItemButton).text("Add to cart");
        $(newItemButton).data("price", store.items[i].price);
        $(newItemButton).data("increase", store.items[i].increase);
        $(newItemButton).data("powerType", store.items[i].powerType);
        $(newItemButton).data("name", store.items[i].itemName);
        $(newItemButton).data("imgData", store.items[i].imgLocation);
        $(newItemName).text(store.items[i].itemName);
        $(newItemPrice).text("Cost: $" + store.items[i].price);
        $(newItemDiv).append(newItemName, newItemPrice, newItemImg, newItemButton);
        $(TargetDiv).append(newItemDiv);
    };

    $(".itemButton").on("click", function () {
        var targetDiv2 = $(".targetDiv2");
        var targetHealthDiv = $("#health");
        var targetALDiv = $("#attackLight");
        var targetAMDiv = $("#attackMed");
        var targetAHDiv = $("#attackHeavy");
        var thisPrice = $(this).data("price");
        var thisName = $(this).data("name");
        var thisIncrease = $(this).data("increase");
        var thisPowType = $(this).data("powerType");
        var thisImg = $(this).data("imgData");
        var newerImg = $("<img>");
        $(newerImg).attr("src", thisImg);
        $(newerImg).attr("width", "50px");
        $(newerImg).attr("height", "50px");

        // player.gp = player.gp - thisPrice;
        // console.log($(this).data("price",));
        console.log(thisName, thisPrice, thisIncrease, thisPowType, thisImg);


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

        $(targetHealthDiv).text("health: " + myUpgrades.health)
        $(targetALDiv).text("attackLight: " + myUpgrades.attackLight)
        $(targetAMDiv).text("attackMed: " + myUpgrades.attackMed)
        $(targetAHDiv).text("attackHeavy: " + myUpgrades.attackHeavy)

        $(targetDiv2).append(newerImg);

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