import { Router } from 'express'
import * as meetupController from './controller'

const routes = new Router()

routes.post('/meetups', meetupController.createMeetup)
routes.get('/meetups', meetupController.getAllMeetups)

export default routes
