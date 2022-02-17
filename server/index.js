const express = require('express');
const app = express();
const port = 3001;

const mysql = require("mysql");
const cors = require('cors');

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "cadastra-roupas",
});

app.use(cors());
// pra ler os dados do crud no front precisa transformar em json
app.use(express.json());

app.get("/", (req, res) => {
  let SQL
})

app.listen(port, () => console.log(`Rodando server na porta ${port}!`));

// https:medium.com/@alexandremjacques/entendendo-o-cors-parte-8331d0a777e1#:~:text=CORS%20(Cross%2DOrigin%20Resource%20Sharing,mesmo%20estando%20em%20dom%C3%ADnios%20diferentes.
