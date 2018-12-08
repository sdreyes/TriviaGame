$(document).ready(function() {

    var intervalId;
    var timer = {
        time: 30,
        reset: function() {
            timer.time = 30;
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
                $("#question").html("<h2 class='missed'>Time's up!</h2><h4>The correct answer was " + questions[index].answer + ".</h4><img src='" + questions[index].gif + "'>");
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
        },
        {
            q: "What is not a piece of the Triforce?",
            a1: "Wisdom",
            a2: "Courage",
            a3: "Strength",
            a4: "Power",
            answer: "Strength",
            gif: "assets/images/3.gif"
        },
        {
            q: "How do you play the Bolero of Fire?",
            a1: "↓ A ↓ A → ↓ → ↓",
            a2: "↓ A ↓ A ← A ← A",
            a3: "↓ A ↓ A ↑ → ↑ →",
            a4: "→ A → A ↑ ↓ ↑ ↓",
            answer: "↓ A ↓ A → ↓ → ↓",
            gif: "assets/images/4.gif"
        },
        {
            q: "In Breath of the Wild, which of these is not a color of Bokoblin?",
            a1: "Blue",
            a2: "Black",
            a3: "Red",
            a4: "Green",
            answer: "Green",
            gif: "assets/images/5.gif"
        },
        {
            q: "In Ocarina of Time, what is the proper order to defeat the deku scrub bothers in the Deku Tree?",
            a1: "3, 2, 1",
            a2: "1, 2, 3",
            a3: "2, 3, 1",
            a4: "1, 3, 2",
            answer: "2, 3, 1",
            gif: "assets/images/6.gif"
        },
        {
            q: "In Ocarina of Time, what melody does Link play to Darunia to cheer him up?",
            a1: "Zelda's Lullaby",
            a2: "Saria's Song",
            a3: "Sun's Song",
            a4: "Song of Time",
            answer: "Saria's Song",
            gif: "assets/images/7.gif"
        },
        {
            q: "In A Link to the Past, what animal does Link turn into when he enters the Dark World?",
            a1: "Rabbit",
            a2: "Dog",
            a3: "Frog",
            a4: "Raven",
            answer: "Rabbit",
            gif: "assets/images/8.gif"
        },
        {
            q: "In Majora's Mask, How many Cucco chicks does Grog have in Romani Ranch?",
            a1: "6",
            a2: "8",
            a3: "10",
            a4: "12",
            answer: "10",
            gif: "assets/images/9.gif"
        },
        {
            q: "",
            a1: "",
            a2: "",
            a3: "",
            a4: "",
            answer: "",
            gif: "assets/images/10.gif"
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
                $("#timer-display").show();
                displayQuestion();
            });
        }
        else {
            index++;
            displayQuestion();
        };
    };

    $("#content").hide()

    $("#start-game").on("click", function() {
        $("#start-game").remove();
        $("#content").show();

        $(".answer-button").on("click", function () {
            var userGuess = ($(this).attr("data-text"));
            timer.stop();
            console.log(userGuess);
            if (userGuess === questions[index].answer) {
                correct++;
                $(".answer-button").hide();
                $("#question").html("<h2 class='correct'>Correct!</h2><h4>The answer was " + questions[index].answer + ".</h4><img src='" + questions[index].gif + "'>");
                var next = setTimeout(questionEnd, 5000);
            }
            else {
                incorrect++;
                $(".answer-button").hide();
                $("#question").html("<h2 class='incorrect'>Incorrect!</2><h4>The correct answer was " + questions[index].answer + ".</h4><img src='" + questions[index].gif + "'>");
                var next = setTimeout(questionEnd, 5000);
            }
        })

        displayQuestion();
    });
});