const express = require('express');
const app = express();
const port = 3001;

const mysql = require("mysql");
const cors = require('cors');

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "produtos",
});

app.use(cors());
// pra ler os dados do crud no front precisa transformar em json
app.use(express.json());

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;
  // console.log(name); testei pra ver se tava recebendo os valores e estava :D

  // execução do BD / EM vez de colocar os valores, coloca-se a ? pra ficar dinâmico e depois envia pra const entre []
  let SQL = 'INSERT INTO produtos (name, cost, category) VALUES (?,?,?)';

  db.query(SQL, [name, cost, category ], (err, result) => {
    console.log(err);
  });
});

app.get("/getCards", (req, res) => {
  let SQL = "SELECT * from produtos";

  // envia o SQL
  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  })
})

app.listen(port, () => console.log(`Rodando server na porta ${port}!`));

// https:medium.com/@alexandremjacques/entendendo-o-cors-parte-8331d0a777e1#:~:text=CORS%20(Cross%2DOrigin%20Resource%20Sharing,mesmo%20estando%20em%20dom%C3%ADnios%20diferentes.
