// random thumnail position
var min = - 600
var max = 500

const randomNum = () =>{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var list = document.querySelectorAll('#contents > ytd-rich-item-renderer')

for(let item of list){
  var x = randomNum();
  var y = randomNum();
  item.style.transform = `translate(${x}px,${y}px)`
}