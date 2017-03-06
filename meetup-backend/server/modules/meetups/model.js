import mongoose, { Schema } from 'mongoose'

mongoose.Promise = global.Promise

const MeetupSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

export default mongoose.model('Meetup', MeetupSchema)
