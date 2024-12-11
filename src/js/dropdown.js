document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-btn');
  const dropdownMenu = document.getElementById('dropdown-menu');
  
  menuButton.addEventListener('click', function () {
    dropdownMenu.classList.toggle('active');
  });
});
