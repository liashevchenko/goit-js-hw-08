!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e),r="videoplayer-current-time";t.on("timeupdate",_.throttle((function(e){var t=e.seconds;localStorage.setItem(r,t)}),1e3));var o=localStorage.getItem(r);o&&t.setCurrentTime(parseFloat(o))}();
//# sourceMappingURL=02-video.ba574894.js.map
