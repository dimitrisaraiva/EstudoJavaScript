// importação do modulo express
const express = require("express");

// importação do modulo mongoose
const mongoose = require("mongoose");

// criação do app referente ao express
const app = express();

// preparar o servidor para receber json
app.use(express.json());

/*
caminho para o banco de dados mongodb
mongodb+srv://<username>:<password>@dimitri.fo63g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
*/
const urldb =
  "mongodb+srv://didika:dimitri24@dimitri.fo63g.mongodb.net/bancodedados?retryWrites=true&w=majority";
mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true });

/*
Definição do esquema de dados da tabela
Schema
*/
const tabela = mongoose.Schema({
  NomeProduto: { type: String, require },
  Descricao: { type: String, require },
  Categoria: { type: String, require },
  Quantidade: { type: String, require },
  Preco: { type: String, require },
});

const Produtos = mongoose.model("tbprodutos", tabela);

// definição de uma rota padrão
const default_route = "/api/produtos";

// rota para listar os Produtos com endpoint listar
app.get(`${default_route}/listar`, (req, res) => {
  Produtos.find()
    .then((dados) => {
      res.status(200).send({ output: dados });
    })
    .catch((erro) =>
      res
        .status(500)
        .send({ output: `Erro interno ao processar a consulta -> ${erro}` })
    );
});

// rota para listar os Produtos com endpoint cadastrar
app.post(`${default_route}/cadastrar`, (req, res) => {
  const prod = new Produtos(req.body);
  prod
    .save()
    .then((dados) => {
      res.status(201).send({ output: `Cadastro realizado`, payload: dados });
    })
    .catch((erro) => console.error(`Erro ao tentar cadastrar ${erro}`));
});

// rota para atualizar os Produtos com endpoint atualizar
// passagem de argumetos para url com o id do Produtos
app.put(`${default_route}/atualizar/:id`, (req, res) => {
  Produtos.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (erro, dados) => {
      if (erro) {
        return res.status(500).send({ output: `Não Atualizou -> ${erro}` });
      }
      res.status(200).send({ output: "Dados Atualizados" });
    }
  );
});

// rota para apagar Produtos com endpoint deletar
app.delete(`${default_route}/apagar/:id`, (req, res) => {
  Produtos.findByIdAndDelete(req.params.id, (erro, dados) => {
    if (erro) {
      return res
        .status(500)
        .send({ output: `Erro ao tentar apagar -> ${erro}` });
    }
    res.status(204).send({ output: `Apagou` });
  });
});

// definir a porta de comunicação do servidor
app.listen(3007, () =>
  console.log("Servidor on-line em http://localhost:3004")
);
