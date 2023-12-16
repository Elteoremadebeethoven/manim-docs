const videos = document.querySelectorAll("video");
for(let video of videos) {
  video.pause();
  video.removeAttribute("loop")
  video.removeAttribute("autoplay")
}