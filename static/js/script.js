console.log('CONNECTED')

// var fiveMinutes = 10
var isCounting = false
// var timeLeft = 10;
// var timerDisplay = document.querySelector('#timerDisplay');
// var pomButton = document.querySelector('#pomButton');

// $('#pomButton').click(function() {
//     isCounting = true
//     startTimer(fiveMinutes, timerDisplay);
    
//     function startTimer(duration, display) {
//         var timer = duration, minutes, seconds;
//         setInterval(function () {
//             minutes = parseInt(timer / 60, 10);
//             seconds = parseInt(timer % 60, 10);
            
//             minutes = minutes < 10 ? "0" + minutes : minutes;
//             seconds = seconds < 10 ? "0" + seconds : seconds;
            
//             display.textContent = minutes + ":" + seconds;
            
//             console.log(seconds);
    
//             if (--timer < 0) {
//                 clearTimeout(timer);
//                 isCounting = false;
//             }
//         }, 1000);
//     }
// });
    

// $('#pomButton').click(function() {
//     isCounting = true
//     var timerId = setInterval(countdown, 1000);

//     function countdown() {
//         if (timeLeft == -1) {
//           clearTimeout(timerId);
//           isCounting = false;
//         } else {
//           timerDisplay.innerHTML = timeLeft;
//           timeLeft--;
//         }
//     }
// });
    
    



// startTimer(fiveMinutes, timerDisplay);


// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);
        
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
        
//         display.textContent = minutes + ":" + seconds;
        
//         console.log(seconds);

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }


var pomTime = 10

$('#pomButton').click(function(){
    $("#pauseButton").removeClass( "hidden" );
    $("#stopButton").removeClass( "hidden" );
    $("#resButton").addClass( "hidden" );
    $("#pomButton").addClass( "hidden" );

    isCounting = true; 
    count = pomTime;
    timeID = setInterval(countdown, 1000);
    
    function countdown(){
        if (count >0){
            count = count-1
            timerDisplay.innerHTML = count;
            console.log(count);
        } 
        else {
            clearTimeout(timeID);
            isCounting = false;
            $("#pauseButton").addClass( "hidden" );
            $("#stopButton").addClass( "hidden" );
            $("#resButton").removeClass( "hidden" );
            $("#pomButton").removeClass( "hidden" );
        }
    }
});



// $("#pomButton").removeClass( "hidden" );
// $("#resButton").removeClass( "hidden" );
// $("#stopButton").addClass( "hidden" );
// $("#pauseButton").addClass( "hidden" );

// $("#stopButton").removeClass( "hidden" );
// $("#pauseButton").removeClass( "hidden" );
// $("#pomButton").addClass( "hidden" );
// $("#resButton").addClass( "hidden" );

$('#resButton').click(function(){
    
});



