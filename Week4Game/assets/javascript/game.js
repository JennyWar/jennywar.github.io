// Welcome to the Crystals Collector Game //

$(document).ready(function() {

  // global variables //
  var wins = 0;
  var losses = 0;
  var userTotal = 0;
  var total;
  var message;
  var firstCrystal;
  var secondCrystal;
  var thirdCrystal;
  var fourthCrystal;
  // have the variables show up on the page //
  $('#userTotal').append(userTotal);
  $('#total').append(total);
  $('#wins').append(wins);
  $('#losses').append(losses);

  // initialize game //
  function startGame() {
      // generate a random number //
      total = Math.floor(Math.random() * (120 - 18)) + 18;
      $('#total').append(total);

      // generate a random number for each crystal //
      firstCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      console.log('first crystal: ' + firstCrystal);

      secondCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      console.log('second crystal: ' + secondCrystal);

      thirdCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      console.log('third crystal ' + thirdCrystal);

      fourthCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      console.log('fourth crystal ' + fourthCrystal);

  }

  // update the score when a crystal is clicked on //

  function updateScore() {
      $('#userTotal').empty();
      $('#userTotal').append(userTotal);
      $('#message').empty();
  }

  // reset the game once the player wins or loses //

  function reset() {
      $('#total').empty();
      $('#userTotal').empty();
      $('#message').append('');
      $('#userTotal').append(userTotal);
      userTotal = 0;

  }

  // update the score when the player wins or loses //

  function winsLosses() {
        // if the player wins //
      if (userTotal === total) {
          wins++;
          userTotal = 0;
          $('#wins').empty();
          $('#wins').append(wins);
          $('#message').append('You Won!');
          reset();
          startGame();
        // if the player loses
      } else if (userTotal > total) {
          losses++;
          userTotal = 0;
          $('#losses').empty();
          $('#losses').append(losses);
          $('#message').append('You Lost!');
          reset();
          startGame();
      }
  }

  // update the score when the player clicks on the first crystal //

  $('#firstCrystal').on('click', function() {
    userTotal = userTotal + firstCrystal;
    updateScore();
    winsLosses();
  });

  $('#secondCrystal').on('click', function() {
        userTotal = userTotal + secondCrystal;
        updateScore();
        winsLosses();
  });

  $('#thirdCrystal').on('click', function() {
          userTotal = userTotal + thirdCrystal;
          updateScore();
          winsLosses();
  });

  $('#fourthCrystal').on('click', function() {
          userTotal = userTotal + fourthCrystal;
          updateScore();
          winsLosses();
  });

    startGame();

});