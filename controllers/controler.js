import { agendaDiaria } from '../data/SampleDados.js';

export const getAllDados = (req, res) => {
  console.log("Chamando getAllDados");
  res.json(agendaDiaria);
};

export const createDado = (req, res) => {
  const novoDado = req.body;
  
  novoDado.id = agendaDiaria.length > 0 ? agendaDiaria[agendaDiaria.length -1].id + 1 : 1;
  
  agendaDiaria.push(novoDado);
  res.status(201).json(novoDado);
};

export const updateDado = (req, res) => {
  const id = parseInt(req.params.id);
  const index = agendaDiaria.findIndex(item => item.id === id);
  
  const atualizado = { ...agendaDiaria[index], ...req.body, id };
  agendaDiaria[index] = atualizado;
  
  res.json(atualizado);
};

export const deleteDado = (req, res) => {
  const id = parseInt(req.params.id);
  const index = agendaDiaria.findIndex(item => item.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Dado não encontrado.' });
  }
  
  agendaDiaria.splice(index, 1);
  
  res.status(204).send();
};
