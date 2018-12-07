$(document).ready(function() {

    var intervalId;
    var timer = {
        time: 20,
        reset: function() {
            timer.time = 20;
        },
        start: function () {
            intervalId = setInterval(timer.count, 1000);
            $("#timer-display").html("Time remaining: " + timer.time);
        },
        stop: function () {
            clearInterval(intervalId);
        },
        count: function() {
            if (timer.time > 0) {
                timer.time--;
                $("#timer-display").html("Time remaining: " + timer.time);
            }
            else {
                timer.stop();
                missed++;
                $(".answer-button").hide();
                $("#question").html("Time's up! The correct answer was " + questions[index].answer + ".<br /><br /><img src='" + questions[index].gif + "'>");
                var next = setTimeout(questionEnd, 5000);
            };
        }
    };

    var correct = 0;
    var incorrect = 0;
    var missed = 0;
    var index = 0;
    var questions = [
        {
            q: "In Breath of the Wild, which amphibian does Princess Zelda ask Link to eat?",
            a1: "Tireless Frog",
            a2: "Hot-Footed Frog",
            a3: "Eyeball Frog",
            a4: "Deku Toad",
            answer: "Hot-Footed Frog",
            gif: "assets/images/1.gif"
        },
        {
            q: "In Majora's Mask, which mask do you wear to inspire the Rosa Sisters to dance?",
            a1: "Kamaro's Mask",
            a2: "Bremen Mask",
            a3: "Keaton Mask",
            a4: "Don Gero's Mask",
            answer: "Kamaro's Mask",
            gif: "assets/images/2.gif"
        }
    ];

    function displayQuestion() {
        timer.reset();
        timer.start();
        $("#question").show();
        $(".answer-button").show();
        $("#question").text(questions[index].q);
        $("#a1").text(questions[index].a1);
        $("#a1").attr("data-text", questions[index].a1);
        $("#a2").text(questions[index].a2);
        $("#a2").attr("data-text", questions[index].a2);
        $("#a3").text(questions[index].a3);
        $("#a3").attr("data-text", questions[index].a3);
        $("#a4").text(questions[index].a4);
        $("#a4").attr("data-text", questions[index].a4);
    };

    function questionEnd() {
        if (correct + incorrect + missed === questions.length) {
            //Display game-end screen and offer the option to replay
            $("#question").hide();
            $(".answer-button").hide();
            $("#timer-display").hide();
            $("#results").show();
            $("#results").append("<h3>Correct: " + correct);
            $("#results").append("<h3>Incorrect: " + incorrect);
            $("#results").append("<h3>Unanswered: " + missed);
            var resetButton = $("<button>");
            resetButton.html("Play Again");
            $("#results").append(resetButton);

            $(resetButton).on("click", function () {
                $("#results").empty();
                $("#results").hide();
                index = 0;
                correct = 0;
                incorrect = 0;
                missed = 0;
                displayQuestion();
                $("#timer-display").show();
            });
        }
        else {
            index++;
            displayQuestion();
        };
    };

    $(".answer-button").on("click", function () {
        var userGuess = ($(this).attr("data-text"));
        timer.stop();
        console.log(userGuess);
        if (userGuess === questions[index].answer) {
            correct++;
            $(".answer-button").hide();
            $("#question").html("Correct!<br />The answer was " + questions[index].answer + ".<br /><br /><img src='" + questions[index].gif + "'>");
            var next = setTimeout(questionEnd, 5000);
        }
        else {
            incorrect++;
            $(".answer-button").hide();
            $("#question").html("Incorrect!<br />The correct answer was " + questions[index].answer + ".<br /><br /><img src='" + questions[index].gif + "'>");
            var next = setTimeout(questionEnd, 5000);
        }
    })

    displayQuestion();

});

