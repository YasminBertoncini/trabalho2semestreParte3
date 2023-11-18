let questoes = [
  {
    pergunta: "Na mitologia grega quem é considerado o deus dos mares? ",
    opcoes: ["Zeus", "Apolo", "Poseidon", "Hefesto"],
    resposta: "Poseidon"
  },
  {
    pergunta: "Qual o país com o maior índice populacional atualmente?",
    opcoes: ["China", "Índia", "Russia", "Estados Unidos"],
    resposta: "Índia"
  },
  {
    pergunta: "Qual é o maior planeta do Sistema Solar?",
    opcoes: ["Terra", "Marte", "Júpiter", "Vênus"],
    resposta: "Júpiter"
  },
  {
    pergunta: "O português é a língua oficial nesses três países:",
    opcoes: ["Guiné Equatorial, Cabo Verde e Angola", "Venezuela, Angola e Portugal", 
             "Guiné-Bissau, África do Sul e Brasil", "Macau, Timor-Leste e Moçambique"],
    resposta: "Guiné Equatorial, Cabo Verde e Angola"
  }
];

let cont = 0;
let acertos = 0;

function loadQuestion() {
  let { pergunta, opcoes } = questoes[cont];
  document.getElementById('pergunta').textContent = pergunta;

  let opcoesContainer = document.getElementById('opcoes');
  opcoesContainer.innerHTML = "";

  opcoes.forEach((opcao, index) => {
    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'opcao';
    radio.value = opcao;

    let label = document.createElement('label');
    label.textContent = opcao;

    opcoesContainer.appendChild(radio);
    opcoesContainer.appendChild(label);
  });
}

function checkAnswer() {
  let { resposta } = questoes[cont];
  let resultadoContainer = document.getElementById('resposta');
  let opcoesContainer = document.getElementById('opcoes');

  let selectedRadio = opcoesContainer.querySelector('input[type="radio"]:checked');

  opcoesContainer.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.disabled = true;
  });

  if (selectedRadio) {
    if (selectedRadio.value === resposta) {
      resultadoContainer.textContent = "Resposta Correta!";
      resultadoContainer.className = "certo";
      acertos++;
    } else {
      resultadoContainer.textContent = `Resposta Incorreta. A resposta correta é: ${resposta}`;
      resultadoContainer.className = "errado";
    }
  }

  document.getElementById('opcoes').classList.add('disabled');
}

function nextQuestion() {
  if (cont < questoes.length - 1) {
    cont++;
    document.getElementById('resposta').textContent = "";
    document.getElementById('opcoes').classList.remove('disabled');
    document.querySelectorAll('#opcoes input[type="radio"]').forEach(radio => {
      radio.disabled = false;
      radio.checked = false;
    });
    loadQuestion();
  } else {
    document.getElementById('container').innerHTML = `<h2>Você terminou o jogo com ${acertos} acerto(s)!</h2>`;
    document.getElementById('container').style.animation = 'rotate 2s linear 2';
  }
}

loadQuestion();
