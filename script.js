let pontos = 0;
const contadorDisplay = document.getElementById('contador');
const cookie = document.getElementById('cookie');
const quadradinhosContainer = document.getElementById('quadradinhos');
const ganharButton = document.getElementById('ganhar');

// Função para atualizar o contador de pontos
function atualizarContador() {
  contadorDisplay.textContent = `Pontos: ${pontos}`;
}

// Função para gerar um quadradinho "clicando"
function gerarQuadradinho() {
  const quadradinho = document.createElement('div');
  quadradinho.classList.add('quadradinho');
  
  // Definindo posições aleatórias para os quadradinhos dentro do cookie
  const x = Math.random() * 120;
  const y = Math.random() * 120;
  quadradinho.style.left = `${x}%`;
  quadradinho.style.top = `${y}%`;

  quadradinhosContainer.appendChild(quadradinho);

  // Remover o quadradinho após a animação
  setTimeout(() => {
    quadradinho.remove();
  }, 1000);
}

// Evento de clique no cookie
cookie.addEventListener('click', () => {
  pontos++;
  gerarQuadradinho();
  atualizarContador();
});

// Função que simula "cliques automáticos"
setInterval(() => {
  pontos++;
  gerarQuadradinho();
  atualizarContador();
}, 1000); // A cada 1 segundo

// Botão de ganhar cookie
ganharButton.addEventListener('click', () => {
  pontos += 10;  // Você pode ajustar esse valor
  atualizarContador();
});
