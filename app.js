document.addEventListener('DOMContentLoaded', function () {
    // final date
    const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 01);
    // timer id
    let timerId = null;
    // calculate the date difference and set the remaining time as the content of the elements
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = 'days';
      $hours.dataset.title = 'hours';
      $minutes.dataset.title = 'minutes';
      $seconds.dataset.title = 'seconds';
    }
    // get elements containing date components  
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // call the function countdownTimer
    countdownTimer();
    // call the function countdownTimer every second
    timerId = setInterval(countdownTimer, 1000);
  });
