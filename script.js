let pontos = 0;
let quadradinhosComprados = 0;
const contadorDisplay = document.getElementById('contador');
const cookie = document.getElementById('cookie');
const quadradinhosContainer = document.getElementById('quadradinhos');
const comprarButton = document.getElementById('comprar');
const informacaoDisplay = document.getElementById('informacao');

// Função para atualizar o contador de cookies
function atualizarContador() {
  contadorDisplay.textContent = `Cookies: ${pontos}`;
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

// Função para comprar quadrado
comprarButton.addEventListener('click', () => {
  if (pontos >= 10) {
    pontos -= 10;  // Custo de 10 cookies por quadradinho
    quadradinhosComprados++;
    atualizarContador();
    atualizarInformacao();
  } else {
    alert('Você precisa de 10 cookies para comprar um quadrado!');
  }
});

// Função para atualizar a informação de quadradinhos comprados
function atualizarInformacao() {
  informacaoDisplay.textContent = `Quadradinhos comprados: ${quadradinhosComprados}`;
}

// Função que simula "cliques automáticos" com base nos quadradinhos comprados
setInterval(() => {
  if (quadradinhosComprados > 0) {
    pontos += quadradinhosComprados; // Cada quadradinho gera 1 cookie por segundo
    gerarQuadradinho();
    atualizarContador();
  }
}, 1000);  // A cada 1 segundo
