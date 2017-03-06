import { Router } from 'express'

import * as groupController from './controller'

const route = Router()

route.post('/groups/new', groupController.createGroup)

export default route
