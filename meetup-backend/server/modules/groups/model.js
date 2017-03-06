import mongoose, { Schema } from 'mongoose'

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, 'name must be at least 5 characters long']
  },
  description: {
    type: String,
    required: true,
    minlength: [10, 'description must be at least 5 characters long']
  },
  category: {
    type: String
  },
  meetups: [{
    type: Schema.Types.ObjectId,
    ref: 'Meetup'
  }]
}, { timestamps: true })

export default mongoose.model('Group', GroupSchema)
