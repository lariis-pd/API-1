import { agendaDiaria} from '../data/SampleDados.js'

export const getAllDados = (req, res) => {
    console.log("Chamanado get dados")
    res.json(agendaDiaria)
}