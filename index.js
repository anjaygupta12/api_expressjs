const express = require('express')
const app = express()
const port = 3000
const userRoute = require('./Routers/userRouter');
const mongooes = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
mongooes.connect("mongodb://127.0.0.1:27017/NewAPi");

app.use('/',userRoute);


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})