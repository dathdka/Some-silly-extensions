//change to darkmode ? every 0.5s

var body = document.getElementsByTagName("body")[0];
var curentColor = 1;

new Promise((resolve) => {
  setInterval(() => {
    body.style.filter = `invert(${curentColor})`;
    curentColor = curentColor === 1 ? 0 : 1;
  }, 500);
});
