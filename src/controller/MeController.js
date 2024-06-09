const Movies = require('../modal/Movie')
const { mongooseToObject } = require('../utils/mongoose')

class MeController {

    // (res,req) => {  }
    // [GET] /me/stored/movies
    storedMovies(req,res,next) {
        Promise.all([Movies.find({}),Movies.countDocumentsDeleted()])
            .then(([movies,countDeleted]) => {
                movies = movies.map(movie => movie.toObject())
                res.render('me/store-movies', {
                    countDeleted,
                    movies,
                })
            })
            .catch(next)
        // Movies.find({})
        // .then(movies => {
        //     movies = movies.map(movie => movie.toObject())
        //     res.render('me/store-movies',{
        //         movies 
        //     })
        // })
        // .catch(next)
    }
    // [GET] /me/stored/trash
    trashMovies(req,res,next) {
        Movies.findDeleted({})
            .then((movies) => {
                movies = movies.map(movie => movie.toObject())
                res.render('me/store-trash', {
                    movies : movies
                })
            })
    }
}

module.exports = new MeController
