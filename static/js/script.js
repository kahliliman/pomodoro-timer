console.log('CONNECTED')

var isCounting = false
var timerDisplay = document.querySelector('#timerDisplay');

// in minutes
var pomTime = 10

timerDisplay.innerHTML = pomTime < 10 ? "0" + pomTime + ":00" : pomTime + ":00";


$('#pomButton').click(function(){
    $("#pauseButton").removeClass( "hidden" );
    $("#resetButton").removeClass( "hidden" );
    $("#breakButton").addClass( "hidden" );
    $("#pomButton").addClass( "hidden" );

    isCounting = true; 
    count = pomTime*60;
    timeID = setInterval(countdown, 1000);
    
    function countdown(){
        if (count >0){
            count = count-1
            minutes = parseInt(count / 60, 10);
            seconds = parseInt(count % 60, 10);
            
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            timerDisplay.innerHTML = minutes + ":" + seconds;
            console.log(count);
        } 
        else {
            clearTimeout(timeID);
            isCounting = false;
            $("#pauseButton").addClass( "hidden" );
            $("#resetButton").addClass( "hidden" );
            $("#breakButton").removeClass( "hidden" );
            $("#pomButton").removeClass( "hidden" );
        }
    }
});


$('#pauseButton').click(function(){
    if (isCounting==true) {
        clearTimeout(timeID);
        $(this).text("continue");
        isCounting=false;
    }
    else if (isCounting==false) {
        $(this).text("pause");
        isCounting=true;
        timeID = setInterval(countdown, 1000);
        function countdown(){
            if (count >0){
                count = count-1
                minutes = parseInt(count / 60, 10);
                seconds = parseInt(count % 60, 10);
                
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
    
                timerDisplay.innerHTML = minutes + ":" + seconds;
                console.log(count);
            } 
            else {
                clearTimeout(timeID);
                isCounting = false;
                $("#pauseButton").addClass( "hidden" );
                $("#resetButton").addClass( "hidden" );
                $("#breakButton").removeClass( "hidden" );
                $("#pomButton").removeClass( "hidden" );
            }
        }
    }
});