const { getAll, create, getOne, remove, update } = require('../controllers/movies.controllers');
const express = require('express');

const routerMovies = express.Router();

routerMovies.route('/movies')
    .get(getAll)
    .post(create);

routerMovies.route('/movies/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

routerMovies.route('/movies/:id/')

module.exports = routerMovies;