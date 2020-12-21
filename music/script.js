var song = document.getElementById("song");
var dur= document.getElementById("seekbar")
function mDur(){dur.max=song.duration}
function mPlay(){dur.value=song.currentTime}
function mSet(){song.currentTime=dur.value}

function playPause() {
  if (song.paused)
    song.play();
  else
    song.pause();
}

function mute() {
  if (song.muted)
    song.muted=false;
  else
    song.muted=true;
}
