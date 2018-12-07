$(document).ready(function() {

    var intervalId;
    var timer = {
        time: 30,
        reset: function() {
            timer.time = 5;
        },
        start: function () {
            intervalId = setInterval(timer.count, 1000);
        },
        stop: function () {
            clearInterval(intervalId);
        },
        count: function() {
            if (timer.time > 0) {
                $("#timer-display").html("Time remaining: " + timer.time);
                timer.time--;
            }
            else {
                $("#timer-display").html("Time's up");
                timer.stop();
            };
        }
    };

    var correct = 0;
    var incorrect = 0;
    var index = 1;
    var questions = [
        {
            q: "What is 1+1?",
            a1: "2",
            a2: "3",
            a3: "4",
            a4: "1,928,476",
            answer: "a1"
        },
        {
            q: "What is yellow?",
            a1: "A plant",
            a2: "A body part",
            a3: "A color",
            a4: "Blue",
            answer: "a3"
        }
    ];

    function displayQuestion() {
        $("#question").text(questions[index].q);
        $("#a1").text(questions[index].a1);
        $("#a1").attr("id", "a1");
        $("#a2").text(questions[index].a2);
        $("#a2").attr("id", "a2");
        $("#a3").text(questions[index].a3);
        $("#a3").attr("id", "a3");
        $("#a4").text(questions[index].a4);
        $("#a4").attr("id", "a4");
    };

    $(".answer-button").on("click", function () {
        var userGuess = ($(this).attr("id"));
        timer.stop();
        console.log(userGuess);
        if (userGuess === questions[index].answer) {
            console.log("true");
        }
    })

    timer.start();
    displayQuestion();

});

