


// setTimeout(function () {
//     console.log("console after one second")
// }, 2000)


// setTimeout(hello, 2000)



// var num = 0
// var interval = setInterval(function () {
//     num += 70
//     console.log(num);

// }, 500)



// function stopIntervals() {
//     console.log("interval stopped")
//     clearInterval(interval)
//     num = 0
// }



// var h1 = document.querySelector('#timer')
// var sec = 0
// var minutes = 0
// var hours = 0

// var timer;
// function startTimer() {
//     timer = setInterval(function () {
//         num += 1
//         h1.innerHTML = num
//     }, 100)
// }
// function stopTimer() {
//     clearInterval(timer)
// }
// function resetTimer() {
//     num = 0
//     h1.innerHTML = 0
//     clearInterval(timer)
// }




var start = document.querySelector ("#start")
var stop = document.querySelector ("#stop")
var reset = document.querySelector ("#reset")


var sec = 0
var min = 0
var hr = 0 



function startTimer() {


    timer = true;
    // watch();
    if (sec < 10) {
        getsec = "0" + sec
    }

    

   timer = setInterval(function () {
    
   
    shot.innerHTML = 0

   }, 1000);
    
}




function StopTimer() {
    
    timer = true;
    // watch();
    if (min < 10) {
        getmin = "0" + min
    }
    clearInterval(timer)

}

function ResetTimer() {

    location.reload()
    if (hr < 10) {
        gethr = "0" + hr
    }
    num ++;
    shot.innerHTML = num
    clearInterval (timer)
    
}

