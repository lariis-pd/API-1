import { Router } from "express";
import { getAllDados, createDado, updateDado, deleteDado } from "../controllers/controler.js";

const rota = Router();

rota.get('/', getAllDados);            
rota.post('/', createDado);           
rota.put('/:id', updateDado);         
rota.delete('/:id', deleteDado);     

export default rota;
