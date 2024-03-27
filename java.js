const names = ["Jaz", "Luca", "Mamá", "Papá"];

const getRandomName = () => {
  return names[Math.floor(Math.random() * names.length)];
}

let animationInterval;
let counter = 0;

const startAnimation = () => {
  animationInterval = setInterval(() => {
    document.getElementById('random-text').textContent = getRandomName();
    counter++;
    if (counter >= 35) {
      clearInterval(animationInterval);
    }
  }, 30);
}

document.getElementById('start-button').addEventListener('click', () => {
  counter = 0;
  startAnimation();
});