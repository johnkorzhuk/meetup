import express from 'express'

import config from './config/config'
import dbConfig from './config/db'
import mwConfig from './config/middleware'
import { MeetupRoutes } from './modules/index'

const { PORT } = config
const app = express()

// Database
dbConfig()
// Middleware
mwConfig(app)

app.use('/api', [MeetupRoutes])

app.listen(PORT, (err) => {
  err
    ? console.error(err)
    : console.log(`Listening on port ${PORT}`)
})
