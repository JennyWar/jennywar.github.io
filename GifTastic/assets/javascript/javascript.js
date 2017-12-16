// GifTastic TV Show 

$(document).ready(function() {

    var showArray = ['Portlandia', 'Silicon Valley', 'Parks and Recreation', 'South Park', 'Workaholics', 'The Simpsons', 'Seinfeld'];

    // display gif when a button listing a show is clicked

    function apiQuery() {

        event.preventDefault();


        var tvShow = $(this).attr('data-show');
        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' +
            tvShow + '&api_key=ik1W29mUaT0svhxwC5iGMZEtgBVjzKF4&rating=g&limit=10';

        console.log(tvShow);
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            console.log(response);

            var results = response.data;

            console.log(results);

            // ========================

            for (var i = 0; i < results.length; i++) {

                var paragraph = $('<p>');
                paragraph.text("rating: " + results[i].rating);

                var showImage = $('<img>');
                showImage.addClass('imageClass');
                showImage.attr('src', results[i].images.fixed_height_still.url);
                showImage.attr('data-animate', results[i].images.fixed_height.url);
                showImage.attr('data-still', results[i].images.fixed_height_still.url);

                var showDiv = $('<div>');

                showDiv.append(paragraph);
                showDiv.append(showImage);

                $('.gifsDiv').prepend(showDiv);

            }

        });

    };

    // functions to create a button from the user search term

    function renderButtons() {
        $('.showButtons').empty();

        for (var i = 0; i < showArray.length; i++) {

            var newButton = $('<button class="btn btn-dark">');
            newButton.addClass('showIndex');
            newButton.attr('data-show', showArray[i]);
            newButton.text(showArray[i]);
            $('.showButtons').append(newButton);
        }
    }


    $('#addShow').on('click', function() {

        var showIndex = $('#searchShow').val().trim();

        showArray.push(showIndex);

        renderButtons();

        return false
    });

    $(document).on('click', '.showIndex', apiQuery);

    renderButtons();

    // makes the gif go from static to animate by clicking on the gif

    $(document).on('click', '.imageClass', function() {
        var state = $(this).attr('data-state');
        if (state === 'still') {
            $(this).attr('src', $(this).attr('data-animate'));
            $(this).attr('data-state', 'animate');
            $('.body').css({'background-image': 'url(./assets/css/rainbow.gif)'});
            // $('.body').css({'background-image': + $(this).attr('data-animate')});
        } else {
            $(this).attr('src', $(this).attr('data-still'));
            $(this).attr('data-state', 'still');
            $('.body').css({'background-image': 'url(./assets/css/source.gif)'});
        }
        console.log(this);
    });

    $(document).on('click', '.body', function() {

    })

});