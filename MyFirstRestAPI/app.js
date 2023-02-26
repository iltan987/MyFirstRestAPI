'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
const apiRouter = express.Router();

const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
function getAllUsers(req, res) {
	res.send(users);
}
function getUserById(req, res) {
	res.send(users.find(u => u.id === parseInt(req.params.id)));
}

app.use('/api', cors(), apiRouter);

apiRouter.get('/users', getAllUsers);
apiRouter.get('/users/:id', getUserById);

const PORT = 4000;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});