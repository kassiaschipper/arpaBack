import express from "express";
import cors from "cors";
import rotasDeCadastro from "./cadastroRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

//const port = process.env.PORT || 4000;

app.get("/status", (req, res) => {
  return res.send("Ok");
});

app.use(rotasDeCadastro);


app.listen(3000, () =>
  console.log(`Listening on port ${3000}`)
);
