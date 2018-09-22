//when start button clicks, initiate timer



// run($("#doneButton").on("click", function() {
//     //creating a variable that stores the correct answer for each question 
//      answerOne === "93 million";
//      answerTwo === "8 planets";
//      answerThree === "100 billion";
//      answerFour === "Austin";
//      answerFive === "Paris";

//      console.log("hello");


//  }));

//use one index.html web page instead of the landing page
//must create three rows for the show and hide functions
//  1. First row contains the div with the start button
//  2. Second row contains the trivia questions
//  3. Third row contains the review page when the timer runs out
//when document ready function, hide the row divs containing the Trivia questions AND review page
//on click start function, hide the row div containing the start button, show the row div containing the Trivia questions complete with timer, and hide the review page
//if number ===0 on timer, replace the alert function with a hide function that hides the row divs with start button and Trivia questions, and shows the review page 

$(document).ready(function () {
    $("#hideTwo").hide();
    $("#startButton").on("click", function () {
        $("#hideOne").hide();
        $("#hideTwo").show();
        var number = 120;
        var intervalID;
        console.log(number);
        function run() {
            clearInterval(intervalID);
            intervalID = setInterval(decrement, 1000);
        }

        function decrement() {
            number--;
            $("#timer").html("<strong>" + "Time Left: " + number + "</strong>")
            if (number === 0) {
                stop();
                alert("Your time is up");
            }
        }

        function stop() {
            clearInterval(intervalID);
        }

        run();

        

    })



});


