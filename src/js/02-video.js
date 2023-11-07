const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const timeKey = "videoplayer-current-time";

player.on('timeupdate', _.throttle(currentTimeRunner, 1000));

function currentTimeRunner(data) {
    const currentTime = data.seconds;
    localStorage.setItem(timeKey, currentTime);
    
}


const savedTime = localStorage.getItem(timeKey);
if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
}