const iframe = document.querySelector('iframe');
let player;

function initializePlayer() {
  player = new Vimeo.Player(iframe);
  player.on('timeupdate', _.throttle(currentTimeRunner, 1000));

  function currentTimeRunner(data) {
    const currentTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);
  }

  const savedTime = localStorage.getItem("videoplayer-current-time");
  if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime)).then(function () {
      if (document.hasFocus()) {
        player.play();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  initializePlayer();
});