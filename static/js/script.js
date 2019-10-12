console.log('connected');

var n = 120
var timerId
var isCounting = false
// var display = document.querySelector('.display')
var min_display = document.querySelector('.min-display')
var sec_display = document.querySelector('.sec-display')
var btn_start = document.querySelector('.btn-start')
var btn_pause = document.querySelector('.btn-pause')
var btn_resume = document.querySelector('.btn-resume')
var btn_reset = document.querySelector('.btn-reset')

minutify(n)

// display.textContent = n

min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;
min_display.textContent = min
sec_display.textContent = sec

btn_start.textContent = 'start'
btn_start.addEventListener('click', function(){ 
	countdown(n);
	btn_start.classList.add("hidden");
	btn_pause.classList.remove("hidden");

})

btn_pause.textContent = 'pause'
btn_pause.addEventListener('click', function(){ 
	pause_countdown();
	btn_pause.classList.add("hidden");
	btn_resume.classList.remove("hidden");
	btn_reset.classList.remove("hidden");
})

btn_resume.textContent = 'resume'
btn_resume.addEventListener('click', function(){ 
	countdown(current);
	btn_resume.classList.add("hidden");
	btn_pause.classList.remove("hidden");	
	btn_reset.classList.add("hidden");
})

btn_reset.textContent = 'reset'
btn_reset.addEventListener('click', function(){ 
	reset_countdown();
	btn_resume.classList.add("hidden");
	btn_pause.classList.add("hidden");
	btn_start.classList.remove('hidden');
	btn_reset.classList.add('hidden');		
})



function countdown(from) {
  current = from;    
  var current_min,current_sec = minutify(current)
  isCounting = true
  console.log(isCounting)

  timerId = setInterval(function() {
  	current_min,current_sec = minutify(current)
  	min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  	sec_display.textContent = sec
  	min_display.textContent = min
    // display.textContent = current
    console.log(current)
    if (current == 0) {
      clearInterval(timerId);
      isCounting = false
      btn_pause.classList.add('hidden');
      btn_reset.classList.remove('hidden');
      isTimesUp = true
  	  console.log('times up!')
  	  alert('Times up!')
    }
    current--;
  }, 1000);

  return current, isCounting, current_min, current_sec;
}

function pause_countdown() {
	clearInterval(timerId);
	isCounting = false;
	console.log(isCounting)
	return isCounting;
}

function reset_countdown() {
	pause_countdown();
	// display.textContent = n;
  	minutify(n)
  	min = min < 10 ? "0" + min : min;
  	sec = sec < 10 ? "0" + sec : sec;
  	sec_display.textContent = sec
  	min_display.textContent = min	
  	isTimesUp = false
}

function minutify(num) {
	min = Math.floor(num / 60);
	sec = num - min * 60;
	return min, sec
}