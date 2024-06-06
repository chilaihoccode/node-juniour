const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const port = 3000
// route init
const route = require('./routes')
// connectDB init
const db = require('./app/config/db/connect')

// middleware DB post data
app.use(express.urlencoded())

db.connectDB()
// config static files
app.use(express.static(path.join(__dirname,'pulic')))

app.engine('.hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views',path.join(__dirname,'resoures','views'))

route(app)


// app.get('/', (req, res) => {
//   res.render('home')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})