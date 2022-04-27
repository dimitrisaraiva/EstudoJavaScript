// importação do módulodo do express
const express = require("express");

// realizar a aplicação da função do express
// em uma variavel de aplicação
const app = express();

// permitir com que o servidor receba dados
// no novo formato json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bem Vindo!");
});

// criação de uma ista de clientes
const clientes = [
  {
    id: 12,
    nome: "Helena",
    idade: 13,
  },
  {
    id: 45,
    nome: "Rafael",
    idade: 21,
  },
];

// rotas para clientes
app.get("/api/clientes/listar", (req, res) => {
  res.status(200).send({ output: clientes });
});

// cadastrar novos clientes
app.post("/api/clientes/cadastrar", (req, res) => {
  clientes.push(req.body);
  res.status(201).send({ output: clientes });
});

app.listen(3004, () => console.log("http://localhost:3004"));
