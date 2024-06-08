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
        formData.image = `https://image.motchilltv.to/motchill/${req.body.imageID}-x350.webp` 
        const movie = new Movies(formData)
        movie.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }

       // [GET] movies/:id/edit
       edit(req,res,next) {
        Movies.findOne({_id : req.params.id})
            .then((movie) => {
                res.render('movies/edit', {
                    movie : mongooseToObject(movie)
                })
            })
    }
      // [PUT] movies/:id
      update(req,res,next) {
        Movies.findOneAndUpdate({ _id : req.params.id},req.body,{image : `https://image.motchilltv.to/motchill/${req.body.imageID}-x350.webp`} )
            .then(() => res.redirect('/me/stored/movies'))
            .catch(next)

    }

    // [DELETE] movies/:id
    destroy(req,res,next) {
        Movies.deleteOne({ _id : req.params.id})
            .then(res.redirect('back'))
            .catch(next)
    }
}

module.exports = new MovieController
