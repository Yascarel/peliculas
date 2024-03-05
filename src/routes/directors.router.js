const { getAll, create, getOne, remove, update, setDirectorsMovies } = require('../controllers/directors.controllers');
const express = require('express');

const routerDirectors = express.Router();

routerDirectors.route('/directors')
    .get(getAll)
    .post(create);

routerDirectors.route('/directors/:id')
    .get(getOne)
    .delete(remove)
    .put(update);
routerDirectors.route('/directors/:id/movies')
    .post(setDirectorsMovies);
    
module.exports = routerDirectors;
