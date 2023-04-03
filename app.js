var todayDate = new Date();
var date = todayDate.getDate();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decembcer"];
var month = monthNames[todayDate.getMonth()];
var year = todayDate.getFullYear();
var fullDate = date + " " + month + ", " + year;
var date = prompt("Enter date.", fullDate);
var time = prompt("Kindly Enter time A/c to 24-hour format.");
var h1 = document.getElementById("time");

if (date === "" || time === "") {
    h1.innerText = "Please Enter Time.";
} else {
    function countDownTime() {
        var todayDate = new Date();
        var todayDateTime = todayDate.getTime();
        var arr = [date, " ", time];
        var abc = arr.join("");
        var myDate = new Date(abc);
        var myDateTime = myDate.getTime();
        var diff = myDateTime - todayDateTime;
        var hour = Math.floor(diff / (1000 * 60 * 60));
        var min = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
        var sec = Math.floor(diff % (1000 * 60) / (1000));
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (hour < 0) {
            h1.innerText = "Iftar time hogya.";
        }
        if (isNaN(hour)) {
            h1.innerText = "Izzat ky dairy me rah kar enter kro!";
        } else {
            h1.innerText = "Time left: " + hour + " hour " + min + " min " + sec + " sec";
        }

    }
    setInterval(countDownTime, 1000);
}
