import * as cadastroRepository from "./cadastroRepository.js"
//betRepository from "../repositories/betRepository.js";

async function insertCadastro(req, res) {
  const { nome, sexo, porte, faixa_etaria, chip, especie } = req.body;
  try {
    const insertCadastro = await cadastroRepository.postCadastro(nome, sexo, porte, faixa_etaria, chip, especie )
    res.status(201).send('Ok');
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function listCadastro(req, res) {
 
  try {
    const getAll = await cadastroRepository.getCadastro();
    const cadastros = getAll.rows;
    res.status(200).send(cadastros);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export { insertCadastro, listCadastro };