//rotate all image in page
var list = document.getElementsByTagName("img");
var deg = 1;
setInterval(() => {
  for (let i = 0; i < list.length; i++) {
    new Promise((resolve) => {
      list[i].style.rotate = `${deg}deg`;
    });
  }
  deg += 1;
}, 40);