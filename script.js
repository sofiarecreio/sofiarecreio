document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const themeToggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offset = 90;
        const position = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: position,
          behavior: 'smooth'
        });
      } else {
        console.error(`Seção com o ID ${targetId} não encontrada.`);
      }
    });
  });

  if (!themeToggleButton) {
    console.error('Botão de alternância de tema não encontrado.');
    return;
  }

  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    themeToggleButton.textContent = '🌞';
  } else {
    themeToggleButton.textContent = '🌙';
  }

  themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');

    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggleButton.textContent = isLight ? '🌞' : '🌙';

    console.log('Tema atualizado:', localStorage.getItem('theme'));
  });
});
