


var clearTime;
var seconds = 0,
  minutes = 0,
  hours = 0;
var secs, mins, gethours;

function startWatch() {

    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    
    setInterval(setTime, 1000);

    function setTime()
    {
        ++seconds ;
        minutes = seconds / 60 ;
        secondsLabel.innerHTML = pad(seconds%60);
        minutesLabel.innerHTML = pad(parseInt(minutes));
    }

    function pad(val)
    {
        var valString = val + "";
        if(valString.length < 2)
        {
            return "0" + valString;
        }
        else
        {
            return valString;
        }
    }
}

////////////////////////////////////////////////////////////////
function startTime() {
    
    const date = new Date();
    console.log(date);
}


var start = document.getElementById("start");
start?.addEventListener("click", startTime);
/////////////////////////////////////////////////////////////////////////
/*create a function to stop the time */
function stopTime() {

    clearInterval(myInterval);

    if (seconds !== 0 || minutes !== 0 || hours !== 0) {
    
    var continueButton = document.getElementById("continue");
    continueButton.setAttribute("hidden", "true");
    
    

    var fulltime = document.getElementById("seconds");
    fulltime.style.display = "block";
    fulltime.style.color = "#ff4500";
    var time = gethours + mins + secs;
    fulltime.innerHTML = "Time Recorded is " + time;

    seconds = 0;
    minutes = 0;
    hours = 0;

    secs = "0" + seconds%60;
    mins = "0" + seconds/60 + ": ";
    gethours = "0" + seconds/120 + ": ";

    var x = document.getElementById("timer");
    var stopTime = gethours + mins + secs;
    x.innerHTML = stopTime;

    var showStart = document.getElementById("start");
    showStart.style.display = "inline-block";
    var showStop = document.getElementById("stop");
    showStop.style.display = "inline-block";
    var showPause = document.getElementById("pause");
    showPause.style.display = "inline-block";

  }
}
window.addEventListener("load", function() {
  var stop = document.getElementById("stop");
  stop.addEventListener("click", stopTime);
});
/*********** End of Stop Button Operations *********/



/*********** Pause Button Operations *********/
function pauseTime() {
  if (seconds !== 0 || minutes !== 0 || hours !== 0) {
    var x = document.getElementById("timer");
    var stopTime = gethours + mins + secs;
    x.innerHTML = stopTime;

    var showStop = document.getElementById("stop");
    showStop.style.display = "inline-block";


    clearTimeout(clearTime);
  }
}

var pause = document.getElementById("pause");
pause.addEventListener("click", pauseTime);

function continueTime() {
  
    if (seconds !== 0 || minutes !== 0 || hours !== 0) {
    
    var x = document.getElementById("timer");
    var continueTime = gethours + mins + secs;
    x.innerHTML = continueTime;

    
    var showStop = document.getElementById("stop");
    showStop.style.display = "inline-block";
   
    clearTimeout(clearTime);
    clearTime = setTimeout("startWatch( )", 1000);
  }
}

window.addEventListener("load", function() {
  var cTime = document.getElementById("continue");
  cTime.addEventListener("click", continueTime);
});

