var countDownDate = new Date("Dec 31, 2022 0:0:0");
var update = setInterval(function () {
    var now = new Date().getTime();
    var TimeLeft = countDownDate - now;
    var days = Math.floor(TimeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((TimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((TimeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((TimeLeft % (1000 * 60)) / 1000);
    document.getElementById("daysLeft").innerHTML = days + "d &nbsp;";
    document.getElementById("hoursLeft").innerHTML = + hours + "h &nbsp;";
    document.getElementById("minutesLeft").innerHTML = + minutes + "m &nbsp;";
    document.getElementById("secondsLeft").innerHTML = + seconds + "s";
}, 1000);