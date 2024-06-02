const Courses = require('../modal/Movie')

class NewsController {

    // (req,res) => {
        // res.render('news')
    // }

    // index(req,res) {
    //     Courses.find({})
    //     .then(courses => {
    //         courses = courses.map(course => course.toObject())
    //         res.render('news',{
    //             courses
    //         })
    //     })
    //     .catch(err => {
    //         res.status().json({error : 'Error'})
    //     })
    //     // res.send('detail')
    // }

    index(req,res) {
        res.render('news')
    }
}

module.exports = new NewsController
