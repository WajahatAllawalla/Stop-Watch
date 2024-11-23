// var hour = document.querySelector("#minHeading");
var minute = document.querySelector("#minHeading");
var second = document.querySelector("#secHeading");
var mili = document.querySelector("#mSecHeading");
var btnStart = document.querySelector(".start");

var h = 0;
var m = 0;
var s = 0;
var mil = 0;
var interval;

var running = false


function toggelFUnc() {
    if (!running) {
        startCount()
    } else {
        stopCount()
    }    // interval = setInterval(timer, 10)
}

function startCount() {
    running = true
    interval = setInterval(timer, 10);
    btnStart.innerHTML = "Stop"
}

function stopCount() {
    running = false
    clearInterval(interval);
    btnStart.innerHTML = "Start"
}


function timer() {
    mil++
    mSecHeading.innerHTML = mil
    if (mil == 100) {
        s++
        mil = 0;
        secHeading.innerHTML = s
    }

    if (s == 60) {
        m++
        minHeading.innerHTML = m
        s = 0
    }
    if (m == 59) {
        h++
        hour.innerHTML = h;
        m = 0
        s = 0
    }


}


function resetCount() {
    clearInterval(interval)

    minHeading.innerHTML = "00"
    secHeading.innerHTML = "00"
    mSecHeading.innerHTML = "00"


    h = 0;
    m = 0;
    s = 0;
    mil = 0;

    hour.innerHTML = "00"
    minHeading.innerHTML = "00"
    secHeading.innerHTML = "00"
    mSecHeading.innerHTML = "00"
    btnStart.innerHTML = "Start"
    running=false
    return
}