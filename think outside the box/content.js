//think outside the box

var item = document.querySelector('#movie_player > div.html5-video-container > video')
var x = 80;
var y = 0;
var r = 80;
var isDown = true;
setInterval(()=>{
  if (isDown) {
    x -= 1;
  } else {
    x += 1;
  }
  y = Math.sqrt(Math.pow(r, 2) - Math.pow(x, 2));
  y = isDown ? y : y*-1;
  item.style.transform = `translate(${x}px,${y}px)`;
  if (x === -80) {
    isDown = false;
  } else if (x === 80) isDown = true;
},20)