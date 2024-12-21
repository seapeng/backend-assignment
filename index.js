require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const { logger, handleError } = require('./src/middlewares/index.js')

const dbConnect = require('./src/db/db.js')
const authRouter = require('./src/routes/auth.js');
const userRouter = require('./src/routes/user.js');
const leaderRouter = require('./src/routes/leader.js');
const buildingRouter = require('./src/routes/building.js');
const roomRouter = require('./src/routes/room.js');
const meetingRouter = require('./src/routes/meeting.js');

const setupSwagger = require('./src/swagger/index.js');
const app = express()

//middleware

dbConnect().catch((err) => {
    console.log("Error DB")
})

// Check Project Runing
app.get('/', function (req, res) {
    return res.json({
        key: 'Hello',
        id: 'World'
    })
})

app.use(bodyParser.json())
app.use(logger)

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/leader', leaderRouter)
app.use('/building', buildingRouter)
app.use('/room', roomRouter)
app.use('/meeting', meetingRouter)


app.use(handleError)

setupSwagger(app)

app.listen(3000, function () {
    console.log(`Server is running on port ${process.env.PORT}`)
})