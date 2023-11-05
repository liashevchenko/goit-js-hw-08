!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",_.throttle((function(e){var t=e.seconds;localStorage.setItem("videoplayer-current-time",t)}),1e3));var r=localStorage.getItem("videoplayer-current-time");r&&t.setCurrentTime(parseFloat(r)).then((function(){t.play()}))}();
//# sourceMappingURL=02-video.10a26803.js.map
