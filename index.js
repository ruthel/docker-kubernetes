const express = require('express')
const bodyParser = require('body-parser')
const User = require('./src/models/user')
require("./src/helpers/mongoose");

const app = express();

app.use(bodyParser.urlencoded({limit: '120mb', extended: true}))
app.use(bodyParser.json({limit: '120mb', extended: true}))

app.get('/list', async (req, res, next) => {
  let list = await User.find()
  res.json(list)
})

app.post('/add', async (req, res, next) => {
  let user = new User(req.body)
  user.save().then(async re => {
    res.json(re)
  })
})

app.delete('/delete/:id', async (req, res, next) => {
  let user = await User.deleteOne({_id: req.params.id})
  res.json(user)
  throw new Error('')
})

app.listen(5025, () => {
  console.log('server started at port 5025')
})