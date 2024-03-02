const { getAll, create, getOne, remove, update, setActorsMovies } = require('../controllers/actors.controllers');
const express = require('express');

const routerActors = express.Router();

routerActors.route('/actors')
    .get(getAll)
    .post(create);

routerActors.route('/actors/:id')
    .get(getOne)
    .delete(remove)
    .put(update);
routerActors.route('/actors/:id/movies')
    .post(setActorsMovies);
    
module.exports = routerActors;