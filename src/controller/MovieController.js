const Movies = require('../modal/Movie')
const { mongooseToObject } = require('../utils/mongoose')

class MovieController {

    // (res,req) => {  }
    show(req,res,next) {
        Movies.findOne({ slug : req.params.slug })
        .then(movies => {
            // res.json(movies)
            res.render('movies/slug',{
                movies : mongooseToObject(movies)
            })
        }) 
        .catch(next)
    }

}

module.exports = new MovieController
