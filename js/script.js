const newYear = new Date("Jan 1,2022 0:0:0").getTime();


var x = setInterval(function()  {

var currentDate = new Date().getTime();

var newYearTime = newYear - currentDate;

console.log(newYearTime);


var days = Math.floor(newYearTime / (86400000));
var hours = Math.floor((newYearTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((newYearTime % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((newYearTime % (1000 * 60)) / 1000);

document.getElementById('days').innerHTML = days ;
document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;

if (newYearTime <= 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "HAPPY";
    document.getElementById("hours").innerHTML = "NEW";
    document.getElementById("minutes").innerHTML = "YEAR";
    document.getElementById("seconds").innerHTML = "!!!!!";
    document.getElementById("h1").innerHTML = "1st Jan 2022";
    document.querySelector("#span").innerHTML = "";
    document.querySelector("#span1").innerHTML = "";
    document.querySelector("#span2").innerHTML = "";
    document.querySelector("#span3").innerHTML = "";
  }
}, 1000);



