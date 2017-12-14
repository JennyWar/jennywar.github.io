// GifTastic TV Show 

$(document).ready(function() {

	// display gif when a button listing a show is clicked

	$('.btn').on('click', function() {

		event.preventDefault();

		// var showArray = ['Portlandia', 'Silicon Valley', 'Parks and Recreation', 'South Park', 'Workaholics'];

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
	        showImage.attr('src', results[i].images.fixed_height.url);

	        var showDiv = $('<div>');

	        showDiv.append(paragraph);
	        showDiv.append(showImage);

	        $('.gifsDiv').prepend(showDiv);
	        
	        }

	    });

	});
});

// functions to create a button from the user search term

// function renderButtons() {
// 	$('.showButtons').empty();
	
// 	for (var i = 0; i < showArray.length; i++) {

// 		var newButton = $('<button class="btn btn-dark">');
// 		newButton.addClass('showIndex');
// 		newButton.attr('data-show', showArray[i]);
// 		newButton.text(showArray[i]);
// 		$('.showButtons').append(newButton);
// 	}
// }


// $('#addShow').on('click', function() {

// 	var showIndex = $('#searchShow').val().trim();

// 	showArray.push(showIndex);

// 	renderButtons();

// 	return false
// });

// $(document).on('click', '.showIndex');

// renderButtons();

// // makes the gif go from static to animate by clicking on the gif

// $('img').on('click', function() {
// 	var state = $(this).attr('data-state');
// 	if (state === 'still') {
// 		$(this).attr('src', $(this).attr('data-animate'));
// 		$(this).attr('data-state', 'animate');
//       } else {
//         $(this).attr('src', $(this).attr('data-still'));
//         $(this).attr('data-state', 'still');
// 	}
// });


