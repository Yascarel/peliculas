const { getAll, create, getOne, remove, update, setGenresMovies } = require('../controllers/genres.controllers');
const express = require('express');

const routerGenres = express.Router();

routerGenres.route('/genres')
    .get(getAll)
    .post(create);

routerGenres.route('/genres/:id')
    .get(getOne)
    .delete(remove)
    .put(update);
routerGenres.route('/genres/:id/movies')
    .post(setGenresMovies);

module.exports = routerGenres;