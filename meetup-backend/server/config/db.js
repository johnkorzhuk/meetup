import mongoose from 'mongoose'

import config from './config'

const { mongoURI } = config

export default () => {
  mongoose.connect(mongoURI)
  mongoose.connection
    .once('open', () => console.log('Mongo running'))
    .on('error', (err) => console.error(err))
}
