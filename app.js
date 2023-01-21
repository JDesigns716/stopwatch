const sw = {
  etime: null, // html time display
  erst: null, // html reset button
  ego: null, // html start/stop button
  timer: null, // timer object
  now: 0, // current elapsed time

  // initialize
  init: () => {
    // get html elements
    sw.etime = document.getElementById('sw-time');
    sw.erst = document.getElementById('sw-rst');
    sw.ego = document.getElementById('sw-go');

    // enable button controls
    sw.erst.onclick = sw.reset;
    sw.ego.onclick = sw.start;
    sw.erst.disabled = false;
    sw.ego.disabled = false;
  },

  // START TIMER
  start: () => {
    sw.timer = setInterval(sw.tick, 1000);
    sw.ego.value = 'Stop';
    sw.ego.onclick = sw.stop;
  },

  // STOP TIMER
  stop: () => {
    clearInterval(sw.timer);
    sw.timer = null;
    sw.ego.value = 'Start';
    sw.ego.onclick = sw.start;
  },

  // TIMER ACTION
  tick: () => {
    // CALCULATE HOURS, MINUTES, SECONDS
    sw.now++;
    let hours = 0,
      minutes = 0,
      seconds = 0;
    remain = sw.now;
    hours = Math.floor(remain / 3600);
    remain -= hours * 3600;
    minutes = Math.floor(remain / 60);
    remain -= minutes * 60;
    seconds = remain;

    // UPDATE DISPLAY TIMER
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    sw.etime.innerHTML = hours + ':' + minutes + ':' + seconds;
  },

  // RESET TIMER
  reset: () => {
    if (sw.timer != null) {
      sw.stop();
    }
    sw.now = -1;
    sw.tick();
  },
};
window.addEventListener('load', sw.init);
