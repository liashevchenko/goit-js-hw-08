const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",_.throttle((function(e){const t=e.seconds;localStorage.setItem("videoplayer-current-time",t)}),1e3));const o=localStorage.getItem("videoplayer-current-time");o&&t.setCurrentTime(parseFloat(o));
//# sourceMappingURL=02-video.2514d21b.js.map
