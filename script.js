// Recuperando dados salvos no localStorage
let pontos = localStorage.getItem('pontos') ? parseInt(localStorage.getItem('pontos')) : 0;
let quadradinhosComprados = localStorage.getItem('quadradinhosComprados') ? parseInt(localStorage.getItem('quadradinhosComprados')) : 0;
let quadradinhoUpgrade = localStorage.getItem('quadradinhoUpgrade') ? parseInt(localStorage.getItem('quadradinhoUpgrade')) : 1;

// Atualizando o contador e as informações na tela
const contadorDisplay = document.getElementById('contador');
const quadradinhosContainer = document.getElementById('quadradinhos');
const comprarButton = document.getElementById('comprar');
const informacaoDisplay = document.getElementById('informacao');
const upgradeButton = document.getElementById('upgrade1');
const upgradeInfoDisplay = document.getElementById('upgrade-info');

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
document.getElementById('cookie').addEventListener('click', () => {
  pontos++;
  gerarQuadradinho();
  atualizarContador();
  salvarProgresso();
});

// Função para comprar quadrado
comprarButton.addEventListener('click', () => {
  if (pontos >= 10) {
    pontos -= 10;  // Custo de 10 cookies por quadradinho
    quadradinhosComprados++;
    atualizarContador();
    atualizarInformacao();
    salvarProgresso();
  } else {
    alert('Você precisa de 10 cookies para comprar um quadrado!');
  }
});

// Função para atualizar as informações de quadradinhos comprados
function atualizarInformacao() {
  informacaoDisplay.textContent = `Quadradinhos comprados: ${quadradinhosComprados}`;
}

// Função para comprar upgrade
upgradeButton.addEventListener('click', () => {
  if (pontos >= 50 && quadradinhoUpgrade < 5) {  // Limite de 5 upgrades
    pontos -= 50;
    quadradinhoUpgrade++;
    salvarProgresso();
    atualizarContador();
    atualizarUpgradeInfo();
  } else if (quadradinhoUpgrade >= 5) {
    alert('Você já atingiu o limite de upgrades!');
  } else {
    alert('Você precisa de 50 cookies para o upgrade!');
  }
});

// Função para atualizar as informações do upgrade
function atualizarUpgradeInfo() {
  upgradeInfoDisplay.textContent = `Upgrade de quadradinho: Nível ${quadradinhoUpgrade}`;
}

// Função para salvar o progresso
function salvarProgresso() {
  localStorage.setItem('pontos', pontos);
  localStorage.setItem('quadradinhosComprados', quadradinhosComprados);
  localStorage.setItem('quadradinhoUpgrade', quadradinhoUpgrade);
}

// Função que simula "cliques automáticos" com base nos quadradinhos comprados e upgrades
setInterval(() => {
  if (quadradinhosComprados > 0) {
    pontos += quadradinhosComprados * quadradinhoUpgrade; // Cada quadradinho gera mais cookies com o upgrade
    gerarQuadradinho();
    atualizarContador();
    salvarProgresso();
  }
}, 1000);  // A cada 1 segundo

// Inicializando as informações na tela
atualizarContador();
atualizarInformacao();
atualizarUpgradeInfo();
