const express = require('express')
const app = express()
const port = 3000
const userRoute = require('./Routers/userRouter');
const ConnectDB = require("./config/Database");
app.use('/',userRoute);

ConnectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})