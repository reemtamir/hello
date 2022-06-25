'use strict';
var pop = new Audio('sounds/balloon.mp3');

const changeColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.querySelector('.click').style.color = '#' + randomColor;
};

function showGame() {
  var elH2 = document.querySelector('.click');
  var elDiv = document.querySelector('.hidden');
  elDiv.classList.remove('hidden');
  elH2.classList.add('hidden');
}

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(20) + 19;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}
var count = 0;
function createBalloons(num) {
  var balloonContainer = document.getElementById('balloon-container');
  for (let i = num; i > 0; i--) {
    var balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.id = i;
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
    balloon.addEventListener('click', function balloonPop(event, id) {
      var elBtn = document.querySelector('.btn');
      var elH2 = document.querySelector('h2');
      document.getElementById(i).classList.add('hide');
      pop.play();
      pop.currentTime = 0;
      count++;
      if (count === 3) {
        elBtn.classList.remove('none');

        elH2.innerHTML = 'כעת ניתן לשלוח את הטופס';
      }
    });
  }
}

window.onload = function () {
  createBalloons(100);
};
