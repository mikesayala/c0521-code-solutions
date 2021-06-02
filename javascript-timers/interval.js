var time = document.querySelector('h1');
var currentTime = 4;
setInterval(function () {
  if (currentTime > 1) {
    currentTime--;
    time.textContent = currentTime;
  } else {
    time.textContent = '~Earth beeeeloooowww Usss~';
  }
}, 1000);
