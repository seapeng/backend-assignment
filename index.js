require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const { logger, handleError } = require('./src/middlewares/index.js')

const dbConnect = require('./src/db/db.js')
const leaderRouter = require('./src/routes/leader.js');
const buildingRouter = require('./src/routes/building.js');
const floorRouter = require('./src/routes/floor.js');
const roomRouter = require('./src/routes/room.js');
const meetingRouter = require('./src/routes/meeting.js');
const userRouter = require('./src/routes/users.js');
const authRouter = require('./src/routes/auth.js');
const fileRouter = require('./src/routes/file.js');
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

app.use('/leader', leaderRouter)
app.use('/building', buildingRouter)
app.use('/floor', floorRouter)
app.use('/room', roomRouter)
app.use('/meeting', meetingRouter)
app.use('/users', userRouter)
app.use('/auth', authRouter)
app.use('/file', fileRouter)

app.use(handleError)

setupSwagger(app)

app.listen(3000, function () {
    console.log(`Server is running on port ${process.env.PORT}`)
})