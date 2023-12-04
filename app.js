const express = require('express');
const mariadb = require('mariadb');
const dotenv = require('dotenv')
dotenv.config()


const app = express();
const pool = mariadb.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/users', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM tb_users');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (conn) conn.release();
  }
});


app.post('/users', async (req, res) => {
  const {id,name, email,cpf,endereco } = req.body;
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query('INSERT INTO tb_users (id,name, email,cpf,endereco) VALUES (?, ?, ?, ?, ? )', [id,name, email,cpf,endereco]);
    res.send('Item adicionado com sucesso!');
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (conn) conn.release();
  }
});

app.put('/users/:id',async(req,res)=> {
  const {id} = req.params;
  const {name,email,cpf,endereco} = req.body
  
  let conn;
  try{
    conn = await pool.getConnection();
    await conn.query(
      'UPDATE tb_users SET name = ?, email = ?, cpf = ?, endereco = ? WHERE id = ?',
      [name, email, cpf, endereco, id]
    );
    res.status(201).send("Usuario atualizado com suceesso")
  }
  catch{
    res.status(500).send("Usuario não atualizado")
  }
})

app.delete('/users/:id',async(req,res) => {
  const {id} = req.params
  let conn
  try{
    conn = await pool.getConnection();
    await conn.query(
      'DELETE FROM tb_users WHERE id=?',[id]
    )
    res.status(200).send('Usuario deletado com suceesso')
  }
  catch{
    res.status(500).send('ERRO')
  }
})


const PORT = 3300; 
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
