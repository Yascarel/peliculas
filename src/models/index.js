const Actors = require("./Actors");
const Directors = require("./Directors");
const Genres = require("./Genres");
const Movies = require("./Movies");

//relaciones de muchos a muchos/ entre directores, genero y actores
Movies.belongsToMany(Directors, { through: 'movies_directos' });
Directors.belongsToMany(Movies, { through: 'movies_directos' });

Movies.belongsToMany(Actors, { through: 'movies_actors'});
Actors.belongsToMany(Movies, { through: 'movies_actors'});

Movies.belongsToMany(Genres, { through: 'movies_genres'});
Genres.belongsToMany(Movies, { through: 'movies_genres'});

