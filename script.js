document.addEventListener('DOMContentLoaded', () => {
  const greeting = document.getElementById('greeting');
  const hours = new Date().getHours();
  const message = hours < 12 ? 'Good morning!' : hours < 18 ? 'Good afternoon!' : 'Good evening!';
  greeting.textContent = message;

  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const dark = document.body.classList.contains('dark');
    toggle.textContent = dark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  });
});
