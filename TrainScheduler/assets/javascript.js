// Train Scheduler 

$(document).ready(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDcQjJl7CZhuhBJ17jL3EN5Z6IPm8dfQtE",
        authDomain: "trainscheduler-1e1a8.firebaseapp.com",
        databaseURL: "https://trainscheduler-1e1a8.firebaseio.com",
        projectId: "trainscheduler-1e1a8",
        storageBucket: "",
        messagingSenderId: "618654788419"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    $('#submit-button').on("click", function() {

        // take user input
        var trainName = $("#trainNameInput").val().trim();
        var destination = $("#destinationInput").val().trim();
        var firstTrain = moment($("#firstTrainInput").val().trim(), "HH:mm").format("HH:mm");
        // If this was not in military time:
        // var firstTrain = moment($("#firstTrainInput").val().trim(), "hh:mm a").format("hh:mm a");
        var frequency = $("#frequencyInput").val().trim();

        // object to hold train data
        var newTrain = {
            trainName: trainName,
            destination: destination,
            firstTrain: firstTrain,
            frequency: frequency
        }

        // uploads train data to the database
        database.ref().push(newTrain);
        console.log(newTrain.name);

        // clears the input boxes
        $("#trainNameInput").val("");
        $("#destinationInput").val("");
        $("#firstTrainInput").val("");
        $("#frequencyInput").val("");

        // Prevents moving to new page
        return false;
    });

    //  event listener 
    database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val());

        // Now we store the childSnapshot values into a variable
        var trainName = childSnapshot.val().trainName;
        var destination = childSnapshot.val().destination;
        var firstTrain = childSnapshot.val().firstTrain;
        var frequency = childSnapshot.val().frequency;

        // convert the train times

        // Current time
        var currentTime = moment().format("HH:mm");
        console.log("current time: " + currentTime);

        // push the time one year back to come before current time
        var dConverted = moment(childSnapshot.val().firstTrain, 'HH:mm').subtract(1, 'years');
        console.log('date converted: ' + dConverted);


        var trainTime = moment(dConverted).format("hh:mm a");
        console.log('train time: ' + trainTime);

        // the difference between train times
        var tConverted = moment(trainTime, 'HH:mm').subtract(1, 'years');
        var tDifference = moment().diff(moment(tConverted), 'minutes');
        console.log('time difference: ' + tDifference);

        // remainder
        var tRemainder = tDifference % frequency;
        console.log('time remaining: ' + tRemainder);

        // the minutes until the next train
        var minutesAway = frequency - tRemainder;
        console.log('minutes until the next train: ' + minutesAway);
        var nextTrain = moment().add(minutesAway, 'minutes').format('HH:mm');

        // append all of the data to the html page
        $("#trainTable").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextTrain + "</td><td>" + minutesAway + "</td></tr>");

    }, function(errorObject) {
        console.log("Read failed: " + errorObject.code)
    });

});