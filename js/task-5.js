const pageBody = document.querySelector('body');
const changeColorButton = document.querySelector('.change-color');
const colorCode = document.querySelector('.color');

changeColorButton.addEventListener('click', (event) => {
  const newHexBackgroundColor = getRandomHexColor();
  pageBody.style.backgroundColor = newHexBackgroundColor;
  colorCode.textContent = newHexBackgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
