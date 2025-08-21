const menuBtn = document.querySelector("#mobile-menu-button");
const mobileMenu = document.querySelector("#mobile-menu");
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));

// Toggle mobile dropdowns
function toggleDropdown(id) {
  const el = document.getElementById(id);
  el.classList.toggle("hidden");
}

// dropdown
function toggleDropdown(button) {
  const dropdown = button.nextElementSibling;
  const arrow = button.querySelector('img');
  dropdown.classList.toggle('hidden');
  arrow.classList.toggle('rotate-180');
}

// price slider
const slider = document.getElementById('rangeSlider');
const minInput = document.getElementById('minInput');
const maxInput = document.getElementById('maxInput');

slider.addEventListener('input', () => {
  maxInput.value = slider.value;
});

maxInput.addEventListener('input', () => {
  let maxVal = parseInt(maxInput.value);
  let minVal = parseInt(minInput.value);

  if (isNaN(maxVal) || maxVal > parseInt(slider.max)) maxVal = parseInt(slider.max);
  if (maxVal < minVal) maxVal = minVal;

  maxInput.value = maxVal;
  slider.value = maxVal;
});

minInput.addEventListener('input', () => {
  let minVal = parseInt(minInput.value);
  let maxVal = parseInt(maxInput.value);

  if (isNaN(minVal) || minVal < parseInt(slider.min)) minVal = parseInt(slider.min);
  if (minVal > maxVal) minVal = maxVal;

  minInput.value = minVal;
});