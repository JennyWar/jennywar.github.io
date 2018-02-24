$(function () {

    // Create a new burger when submit button is clicked
    $("#createburger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            burger: $("#createburger [name=burger]").val().trim()
        };

        // Send the POST request.
        $.ajax("/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // Update the burger when submit button is clicked
    $("#updateburger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const id = $("[name=id]").val().trim();

        const updatedBurger = {
            burger: $("#updateburger [name=burger]").val().trim()
        };

        // Send the PUT request.
        $.ajax("/burgers/" + id, {
            type: "PUT",
            data: updatedBurger
        }).then(
            function () {
                console.log("updated burger ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

})