import { Schema } from 'mongoose'

const dealSchema = new Schema({
  blingId: Number,
  blingNumber: Number,
  pipedriveId: Number,
  title: String,
  value: Number,
  customer: {
    name: String,
    emails: [{
      label: String,
      value: String,
      primary: Boolean
    }],
    phones: [{
      label: String,
      value: String,
      primary: Boolean
    }]
  },
  createdAt: { type: Date, default: Date.now }
})

export default dealSchema
