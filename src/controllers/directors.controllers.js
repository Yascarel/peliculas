const catchError = require('../utils/catchError');
const Directors = require('../models/Directors');

const getAll = catchError(async(req, res) => {
    const results = await Directors.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Directors.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Directors.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Directors.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Directors.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});
const setDirectorsMovies = catchError (async(req, res) => {
    const { id } = req.params;
    const directors = await Actors.findByPk(id);
    await directors.setMovies(req.body);
    const movies = await directors.getMovies();
    return res.json(movies)
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setDirectorsMovies
}