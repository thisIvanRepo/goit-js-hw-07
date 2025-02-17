const inputValue = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

inputValue.addEventListener('input', (event) => {
  const inputName = capitalizeFirstLetter(event.target.value.trim());
  outputName.textContent = inputName === '' ? 'Anonymous' : inputName;
});

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
