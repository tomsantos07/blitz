const express = require('express');
const app = express();
const port = 3001;

const db = require("mysql");

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Rodando server na porta ${port}!`));
