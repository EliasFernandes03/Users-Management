const userService = require('../services/services');

async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function createUser(req, res) {
  const { name, email, cpf, endereco } = req.body;
  try {
    await userService.createUser(name, email, cpf, endereco);
    res.send('Item adicionado com sucesso!');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updateUser(req, res) {
  const { id } = req.params;
  const { name, email, cpf, endereco } = req.body;
  try {
    await userService.updateUser(id, name, email, cpf, endereco);
    res.status(201).send('Usuário atualizado com sucesso');
  } catch (err) {
    res.status(500).send('Usuário não atualizado');
  }
}

async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    await userService.deleteUser(id);
    res.status(200).send('Usuário deletado com sucesso');
  } catch (err) {
    res.status(500).send('ERRO');
  }
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
