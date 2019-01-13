
let getTimeRemaining=(endtime)=> {
    var t = endtime.map(date => new Date(date).getTime());
                                                  /*Date.parse(endtime) - Date.parse(new Date());*/
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  let initializeClock=(id)=> {
    var clock = document.getElementById(id);
    
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      //var t = getTimeRemaining(endtime);
  
     
      hoursSpan.innerHTML = ('0').slice(-2);;
      minutesSpan.innerHTML = ('0').slice(-2);
      secondsSpan.innerHTML = ('0').slice(-2);
  
      //*if (t.total <= 0) {
        /*clearInterval(timeinterval);
      }*/
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  //var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  initializeClock('clockdiv');