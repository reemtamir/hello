'use strict';

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
