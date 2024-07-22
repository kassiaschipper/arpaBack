import { Router } from "express";
import { insertCadastro, listCadastro } from "./cadastroController.js";

const rotasDeCadastro = Router();
rotasDeCadastro.post("/cadastro", insertCadastro)
rotasDeCadastro.get("/cadastro", listCadastro)

export default rotasDeCadastro
