import { connection } from "./db.js";

const postCadastro = async (nome, sexo, porte, faixa_etaria, chip, especie) => {
 return await connection.query(
     `INSERT INTO "animais" (nome, sexo, porte, faixa_etaria,chip,especie) VALUES ($1, $2, $3, $4, $5, $6);`,
     [nome, sexo, porte, faixa_etaria, chip, especie],
   );
};

const getCadastro = async() => {
  return await connection.query(`SELECT * FROM animais`);
};

export {postCadastro,getCadastro}