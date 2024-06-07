const Movies = require('../modal/Movie')
const { mongooseToObject } = require('../utils/mongoose')

class MeController {

    // (res,req) => {  }
    // [GET] /me/stored/movies
    storedMovies(req,res,next) {
        Movies.find({})
        .then(movies => {
            movies = movies.map(movie => movie.toObject())
            res.render('me/store-movies',{
                movies 
            })
        })
        .catch(next)
    }
}

module.exports = new MeController
