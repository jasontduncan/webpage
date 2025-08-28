document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const images = document.querySelectorAll('[data-day][data-night]');

  function updateTheme() {
    const night = document.body.classList.contains('night');
    toggle.textContent = night ? 'Switch to Day' : 'Switch to Night';
    images.forEach(img => {
      img.src = night ? img.dataset.night : img.dataset.day;
    });
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('night');
    updateTheme();
  });

  updateTheme();

});
