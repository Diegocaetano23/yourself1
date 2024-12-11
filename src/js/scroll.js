// Dropdown menu
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-btn');
    const dropdownMenu = document.getElementById('dropdown-menu');
  
    menuButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('active');
    });
  });
  
  // Efeito scroll (movimento vertical suave na área central)
  document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const content = document.querySelector('.content');
  
    content.style.transform = `translate(-50%, -50%) translateY(${scrollPosition * 0.4}px)`;
  });
  