window.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('chat-toggle');
  const chat = document.getElementById('chat-window');
  const close = document.getElementById('chat-close');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-input');
  const messages = document.getElementById('chat-messages');

  function openChat() {
    chat.classList.remove('hidden');
    toggle.classList.add('hidden');
    input.focus();
  }

  function closeChat() {
    chat.classList.add('hidden');
    toggle.classList.remove('hidden');
  }

  toggle.addEventListener('click', openChat);
  close.addEventListener('click', closeChat);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.textContent = text;
    messages.appendChild(userMsg);
    messages.scrollTop = messages.scrollHeight;
    input.value = '';

    setTimeout(() => {
      const hostMsg = document.createElement('div');
      hostMsg.className = 'message host';
      hostMsg.textContent = "Thanks for reaching out! We'll get back to you soon.";
      messages.appendChild(hostMsg);
      messages.scrollTop = messages.scrollHeight;
    }, 600);
  });
});
