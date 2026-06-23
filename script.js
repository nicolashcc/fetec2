document.addEventListener('DOMContentLoaded', () => {
  // Elementos do Menu e Tema
  const menuToggle = document.querySelector('#menu-toggle');
  const navMenu = document.querySelector('nav ul');
  const themeToggle = document.querySelector('#theme-toggle');
  const themeIcon = document.querySelector('#theme-toggle i');

  // Elementos do Login
  const loginBtn = document.querySelector('#login-btn');
  const loginModal = document.querySelector('#login-modal');
  const closeModal = document.querySelector('.close-modal');
  const loginForm = document.querySelector('#login-form');

  // Elementos do Dragão
  const dragonBubble = document.querySelector('#dragon-bubble');
  const dragonHelpMenu = document.querySelector('#dragon-help-menu');

  // Alternar o menu no mobile
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Alternar entre Light Mode e Dark Mode
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    } else {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  });

  // Abrir e Fechar Modal de Login
  loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
  });

  closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });

  // Ação de Login Funcional
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#username').value;
    const role = document.querySelector('#user-role').value;

    // Fecha o modal
    loginModal.style.display = 'none';

    // Muda o botão de login para o nome do usuário
    loginBtn.innerHTML = `<i class="fas fa-user-check"></i> Olá, ${name}`;

    // Dragão reage ao Login baseado nas regras de negócio da Etec!
    dragonHelpMenu.style.display = 'flex';
    
    if (role === 'Estudante') {
      dragonBubble.innerHTML = `Seja bem-vindo, Dragão Estudante <b>${name}</b>! Preparado para explorar as produções da FETEC hoje? 🐉✨`;
    } else if (role === 'Professor') {
      dragonBubble.innerHTML = `É uma honra tê-lo aqui, mestre <b>${name}</b>! Obrigado por guiar nossos desenvolvedores. Como posso te ajudar? 🎓🐉`;
    } else {
      dragonBubble.innerHTML = `Olá, <b>${name}</b>! Ficamos muito felizes com a sua visita à nossa comunidade. Quer que eu te explique o site? 🌍🐉`;
    }
  });
});

// Respostas dinâmicas do assistente dragão
function askDragon(topic) {
  const bubble = document.querySelector('#dragon-bubble');
  if (topic === 'curso') {
    bubble.innerHTML = "O curso de <b>Informática para Internet</b> ensina programação web, banco de dados e design para você criar sites e apps incríveis! 💻";
  } else if (topic === 'exposicoes') {
    bubble.innerHTML = "Aqui abaixo estão os melhores projetos do ano! Jogos no Scratch, testes vocacionais e robótica. Clique em 'Saiba mais' em qualquer um deles! 🎮🚀";
  }
}