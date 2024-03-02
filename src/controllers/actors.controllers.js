const catchError = require('../utils/catchError');
const Actors = require('../models/Actors');

const getAll = catchError(async(req, res) => {
    const results = await Actors.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Actors.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Actors.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Actors.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Actors.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const setActorsMovies = catchError (async(req, res) => {
    const { id } = req.params;
    const actors = await Actors.findByPk(id);
    await actors.setMovies(req.body);
    const movies = await actors.getMovies();
    return res.json(movies)
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setActorsMovies
}