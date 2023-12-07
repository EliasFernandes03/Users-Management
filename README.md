# Documentação da API

Bem-vindo à documentação da API! Este documento fornece detalhes sobre os endpoints disponíveis e instruções para interagir com a API.

## Visão Geral

Esta API permite a manipulação de usuários.

## Base URL

A URL base para todos os endpoints é: `http://localhost:3300`

## Autenticação

Esta API não requer autenticação no momento.

## Endpoints Disponíveis

### Listar todos os usuários

- **URL:** `/users`
- **Método:** `GET`
- **Descrição:** Retorna uma lista de todos os usuários cadastrados.

### Criar um novo usuário

- **URL:** `/users`
- **Método:** `POST`
- **Descrição:** Adiciona um novo usuário ao sistema.

### Atualizar informações de um usuário

- **URL:** `/users/:id` (Substitua `:id` pelo ID do usuário)
- **Método:** `PUT`
- **Descrição:** Atualiza informações de um usuário existente.

### Deletar um usuário

- **URL:** `/users/:id` (Substitua `:id` pelo ID do usuário)
- **Método:** `DELETE`
- **Descrição:** Remove um usuário do sistema.



