const newRouter = require('./news') 
const siteRouter = require('./site')
const meRouter = require('./me')
const movieRouter = require('./movies')

function route (app) {
    app.use('/movies',movieRouter)
    app.use('/news',newRouter)
    app.use('/me',meRouter)
    app.use('/',siteRouter)

}

module.exports = route;