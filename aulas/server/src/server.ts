import express from 'express';

const app = express ();

// ROTA E RECURSOS
//isso se chama rota
// http://localhost/3333/users
// http://localhost/3333/contacts
// recursos são o que vem depois da barra, ou seja o
// /users
// /contacts

//Metodos mais utilizados no backend
// GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existe
//DELETE: Deletar uma informação existente


app.get('/users', function ( request, response) {

	return response.json('users')

})



app.listen(3333);
