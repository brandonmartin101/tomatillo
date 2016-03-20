var pomLength = 25;
var pomCurrentMin = 24;
var pomCurrentSec = 60;
var nIntervId;
var isPaused = false;

function updateLength() {
  pomLength = $("#pom-length").val();
  console.log(pomLength);
  $("#pom-time").html(pomLength);
}

function resetTime() {
  console.log("reset", pomLength);
  $(".bar").removeClass("pom-animation");
  $("#pom-time").html(pomLength);
  clearInterval(nIntervId);
}

function startTimer(time) {
  console.log("start timer: ", pomLength);
  $(".bar").addClass("pom-animation");
  pomCurrentMin = pomLength - 1;
  pomCurrentSec = 60;
  nIntervId = setInterval(countDown, 1000);
}

function countDown() {
  if (!isPaused) {
    pomCurrentSec -= 1;
    if (pomCurrentSec === -1) {
      pomCurrentSec = 59;
      pomCurrentMin -= 1;
    }
    if (pomCurrentSec <= 9) pomCurrentSec = "0" + pomCurrentSec;
    if (pomCurrentMin === 0 && pomCurrentSec == 0) {
      // break time
      $("#pom-time").html("Break!");
      clearInterval(nIntervId);
    } else {
    console.log("count", pomCurrentMin, pomCurrentSec);
    $("#pom-time").html(pomCurrentMin+":"+pomCurrentSec);
    }
  }
}

$("#pom-time").click(function() {
  if (isPaused) {
    isPaused = false;
    console.log("unpaused");
  } else {
    isPaused = true;
    console.log("paused");
  }
});