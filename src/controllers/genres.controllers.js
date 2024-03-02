const catchError = require('../utils/catchError');
const Genres = require('../models/Genres');

const getAll = catchError(async(req, res) => {
    const results = await Genres.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Genres.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Genres.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Genres.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Genres.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});
const setGenresMovies = catchError (async(req, res) => {
    const { id } = req.params;
    const genres = await Actors.findByPk(id);
    await genres.setMovies(req.body);
    const movies = await genres.getMovies();
    return res.json(movies)
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setGenresMovies
}