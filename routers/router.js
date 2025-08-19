import { Router } from "express";
import { getAllDados } from "../controllers/controler.js";

const rota = Router();

rota.get('/', getAllDados);

export default rota;