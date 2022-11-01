const express = require('express')
const app = express()
const port = 3000
const myMiddleWear = (req, res, next) => {
  console.log('My middlewear running');
  next();
}
//app.use(myMiddleWear)
//app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log('res:----');
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  console.log('req.params:----', req.params);
  res.send('Users')
})

app.get('/users/travel/:from-:to', myMiddleWear, (req, res) => {
  console.log('req.params2 :----', req.params);
  res.sendFile(__dirname + '/index.html');
  //res.send('User Profile Of  ' + req.params.from + ' ' + req.params.to);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})