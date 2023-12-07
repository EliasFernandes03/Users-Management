const pool = require('../connection');
const { v4: uuidv4 } = require('uuid');

async function getAllUsers() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM tb_users');
    return rows;
  } finally {
    if (conn) conn.release();
  }
}

async function createUser(name, email, cpf, endereco) {
  const id = uuidv4();
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query(
      'INSERT INTO tb_users (id, name, email, cpf, endereco) VALUES (?, ?, ?, ?, ?)',
      [id, name, email, cpf, endereco]
    );
  } finally {
    if (conn) conn.release();
  }
}

async function updateUser(id, name, email, cpf, endereco) {
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query(
      'UPDATE tb_users SET name = ?, email = ?, cpf = ?, endereco = ? WHERE id = ?',
      [name, email, cpf, endereco, id]
    );
  } finally {
    if (conn) conn.release();
  }
}

async function deleteUser(id) {
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query('DELETE FROM tb_users WHERE id=?', [id]);
  } finally {
    if (conn) conn.release();
  }
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
