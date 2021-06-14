const express = require('express')
const app = express()


require('dotenv').config()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const webhooksRoutes = require('./routes/webhooks')
const forcastRoutes = require('./routes/forecasts')
const cityRoutes = require('./routes/cities')
const temperatureRoutes = require('./routes/temperature')
const port = process.env.PORT || 3000


app.use(bodyParser.json());

app.use(webhooksRoutes)
app.use(cityRoutes)
app.use(temperatureRoutes)
app.use(forcastRoutes)


mongoose.connect(process.env.MONGODB_LOCAL_DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(result =>{
    console.log('database connected');
}).catch(err => console.log(err))

app.listen(port, () =>{
    console.log(`app is running on port ${port}`)
})