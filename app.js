const express = require('express');
const app = express();
const userController = require('./src/controllers/controller');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// User Routes
app.get('/users', userController.getAllUsers);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

const PORT = 3300;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
