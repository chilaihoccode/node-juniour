const Movies = require('../modal/Movie')

class SiteController {
    async index(req,res,next) {
        Movies.find({})
        .then(movies => {
            movies = movies.map(movie => movie.toObject())
            res.render('home',{
                movies
            })
        })
        .catch(next)
    }
}

module.exports = new SiteController;
