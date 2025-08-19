import { response } from "express";
import agendaDiaria from "../data/SampleDados.js"

const urlApi = 'http://localhost:8080/'

import { agendaDiaria } from './sampleDados.js';

function criarCard(tarefa){
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <p><strong>Título:</strong> ${tarefa.titulo}</p>
    <p><strong>Status:</strong> ${tarefa.status}</p>
    <p><strong>Horário:</strong> ${tarefa.horario}</p>
  `;

  return card;
}

const container = document.getElementById('cards-container');
const primeirosQuatro = agendaDiaria.slice(0, 4);

primeirosQuatro.forEach(tarefa => {
  const card = criarCard(tarefa);
  container.appendChild(card);
});
