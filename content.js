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

//change to darkmode ? every 0.5s

var body = document.getElementsByTagName("body")[0];
var curentColor = 1;

new Promise((resolve) => {
  setInterval(() => {
    body.style.filter = `invert(${curentColor})`;
    curentColor = curentColor === 1 ? 0 : 1;
  }, 500);
});



