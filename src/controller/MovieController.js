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

    // create movies/create
    create(req,res,next) {
        res.render('movies/create')
    }

    // store movies/store
    store(req,res,next) {
        const formData = req.body
        formData.image = `https://image.motchilltv.to/avatar/${req.body.imageID}-x350.webp` 
        const movie = new Movies(formData)
        movie.save()
            .then(() => res.redirect('/'))
            .catch(next)

        console.log('Save Movies')
    }

}

module.exports = new MovieController
