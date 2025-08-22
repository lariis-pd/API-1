import {db} from '../firebase.js'

export const createDado = async (req, res) => {
  try {
    const dado = req.body;
    const docRef = await colecao.add(dado);
    res.status(201).json({ id: docRef.id, ...dado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllDados = async (req, res) => {
  try {
    const snapshot = await colecao.get();
    const dados = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(dados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getDadoById = async (req, res) => {
  try {
    const doc = await colecao.doc(req.params.id).get();
    if (!doc.exists) return res.status(404).json({ message: 'Dado não encontrado' });
    res.json({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateDado = async (req, res) => {
  try {
    const docRef = colecao.doc(req.params.id);
    const doc = await docRef.get();
    if (!doc.exists) return res.status(404).json({ message: 'Dado não encontrado' });

    await d// DELETERef.update(req.body);
    const updatedDoc = await docRef.get();
    res.json({ id: updatedDoc.id, ...updatedDoc.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteDado = async (req, res) => {
  try {
    const docRef = colecao.doc(req.params.id);
    const doc = await docRef.get();
    if (!doc.exists) return res.status(404).json({ message: 'Dado não encontrado' });

    await docRef.delete();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
