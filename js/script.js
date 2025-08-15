const menuBtn = document.querySelector("#mobile-menu-button");
const mobileMenu = document.querySelector("#mobile-menu");
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));

// Toggle mobile dropdowns
function toggleDropdown(id) {
  const el = document.getElementById(id);
  el.classList.toggle("hidden");
}

