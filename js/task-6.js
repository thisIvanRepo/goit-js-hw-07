const containerBoxes = document.querySelector("#boxes");
const controlPanel = document.querySelector("#controls")
const imputedElement = document.querySelector("input[type='number']");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

createButton.addEventListener("click", event => {
  const amount = imputedElement.value;
  containerBoxes.style.padding = "32px";
  createBoxes(Number(amount));
  imputedElement.value = "";
});

destroyButton.addEventListener("click", event => {
  containerBoxes.innerHTML = "";
  imputedElement.value = "";
  containerBoxes.style.padding = "";
});

function createBoxes(amount) {
  if(amount < 0 || amount > 100) {
    return;
  } else {
    let sizeNextBox = 30;
    let boxes = "";

    for (let i = 1; i <= amount; i += 1) {
      boxes += `<div
                  style="background-color: ${getRandomHexColor()};
                          width: ${sizeNextBox}px;
                          height: ${sizeNextBox}px;">
                </div>`
      sizeNextBox += 10;
    }

    containerBoxes.insertAdjacentHTML("beforeend", boxes);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
