var playButton = document.getElementById("play_button");
var pausebutton = document.getElementById("pause-button");
var video = document.getElementById("vd");
// Event listener for the play/pause button
video.addEventListener("mouseleave", function () {
  playButton.style = "opacity: 0";
  pausebutton.style = "opacity: 0";
});
video.addEventListener("mouseenter", function () {
  if (video.paused == true) {
    playButton.style = "display:block";
  } else {
    pausebutton.style = "display:block";
  }
});
playButton.addEventListener("click", function () {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.style = "display:none";
    pausebutton.style = "display:block";
  } else {
    pausebutton.style = "display:block";
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.style = "display:block";
    pausebutton.style = "display:none";
  }
});
pausebutton.addEventListener("click", function () {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.style = "display:none";
    pausebutton.style = "display:block";
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.style = "display:block";
    pausebutton.style = "display:none";
  }
});
