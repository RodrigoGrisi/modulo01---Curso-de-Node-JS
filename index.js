const express = require("express");

console.log(express);

const server = express();

server.use(express.json());

// query params = ?nome=NodeJS

// Route Params = /curso/2

// request Body = {nome: 'NodeJS , tipo: 'Backend}

// localhost:3000/curso

//CRUD - CREATE - READ - UPDATE - DELETE

const cursos = ["Node JS", "Javascript", "React Native", "PHP", "Laravel"];

// READ
server.get("/cursos", (req, res) => {
  return res.json(cursos);
});

server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index]);
});

// POST
server.post("/cursos", (req, res) => {
  const { name } = req.body;

  cursos.push(name);

  return res.json(cursos);
});

// UPDATE
server.put("/cursos/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

// DELETE
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);

  return res.json({ message: "Curso deletado com sucesso!", cursos: cursos });
  // return res.send()
});

server.listen(3000);
