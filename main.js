const body = document.querySelector('body');

let red = 100;
let green = 100;
let blue = 100;

const step = 10;

body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

function detectKey(e) {
  if (e.keyCode == 38) {
    console.log('Rozjaśniam');
    red += step;
    green += step;
    blue += step;
  } else if (e.keyCode == 40) {
    console.log('Przyciemniam');
    red -= step;
    green -= step;
    blue -= step;
  }
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

window.addEventListener('keydown', detectKey);
