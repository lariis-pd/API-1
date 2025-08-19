import express from 'express';
import router from './routers/router.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const _dirname = Path2D.dirname(filename);

const app = express();
const PORTA = process.env.PORTA || 8080;

app.use(express.json());

app.use(express.static(path.join(_dirname, 'public')));

app.use('/', router);

app.get('/', (req, res) =>{
    res.sendFile(path.join(dirname, 'public', 'index.html'))
})

app.listen(() => {
    console.log("Suas atividades")
})

app.listen(PORTA, () => {
  console.log(`Servidor rodando em https://localhost:${PORTA}`);
});
