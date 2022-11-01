const express = require('express')
const bodyParser = require('body-parser')
const moongose = require
const { body, validationResult } = require('express-validator');
const app = express()
const port = 3000
app.set('views', './public/pages')
app.set('view engine', 'twig')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) =>{
    res.render('index', {title:'Home Town', body: 'This is home page. Welcome'})
})
app.post('/',
    body('UserEmail', 'Please Enter Valid Email.').isEmail().trim(),   
    body('UserPassword', 'Please Enter Valid Password.').isLength({min:5, max:10}).trim(),   
(req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array());
        //res.status(400).json({ errors: errors.array() });
        res.render('index', {errors: errors.array() })
    } else {
        console.log(req.body.UserName);
        res.render('about', {Body:req.body})
    }
    
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })