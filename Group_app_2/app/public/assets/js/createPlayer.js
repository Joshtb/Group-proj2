$(document).ready(function () {
    console.log("titties")
    // building item html
    event.preventDefault();
    $('.createPlayerBtn').click(function () {
        event.preventDefault();
        console.log("Here we go")
        var newEmail = $("#inputEmail").val().trim();
        var newPass = $("#inputPass").val().trim();

        console.log(newEmail, newPass)

        var newSignIn = {
            emailAddress: newEmail,
            pass: newPass,
            health: 100,
            attackLight: 10,
            attackMed: 15,
            attackHeavy: 30,
            numLight: 10,
            numMed: 15,
            numHeavy: 30,
            gp: 100,
        };

        // Send the PUT request.

        $.ajax("/api/players", {
            type: "POST",
            data: newSignIn
        }).then(
            function () {
                console.log();
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});