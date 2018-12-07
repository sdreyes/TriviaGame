$(document).ready(function() {

    var intervalId;
    var timer = {
        time: 5,
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
    var questions = [
        {
            q1: "What is 1+1?",
            a1: "2",
            a2: "3",
            a3: "4",
            a4: "1,928,476",
            answer: a1
        },
        {
            q2: "What is yellow?",
            a1: "A plant",
            a2: "A body part",
            a3: "A color",
            a4: "Blue",
            answer: a3
        }
    ];

    timer.start();

});

