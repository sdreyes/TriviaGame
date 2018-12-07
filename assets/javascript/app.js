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
                console.log(this);
            };
        }
    };

    timer.start();

});

