document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);
    
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: "smooth",
          });
        } else {
          console.error(`Seção com o ID ${targetId} não encontrada!`);
        }
      })
  });
})

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // Verificar se o botão existe e se há tema armazenado
  if (!themeToggleButton) {
    console.error('Botão de alternância de tema não encontrado.');
    return;
  }

  if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-theme');
      themeToggleButton.textContent = '🌙';  // Ícone para tema escuro
  } else {
      body.classList.add('light-theme');
      themeToggleButton.textContent = '🌞';  // Ícone para tema claro
  }

  themeToggleButton.addEventListener('click', () => {
      if (body.classList.contains('light-theme')) {
          body.classList.replace('light-theme', 'dark-theme');
          themeToggleButton.textContent = '🌙';
          localStorage.setItem('theme', 'dark');
      } else {
          body.classList.replace('dark-theme', 'light-theme');
          themeToggleButton.textContent = '🌞';
          localStorage.setItem('theme', 'light');
      }

      // Log para depuração
      console.log('Tema atualizado:', localStorage.getItem('theme'));
  });
});

  