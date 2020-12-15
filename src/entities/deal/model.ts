import mongoose from 'mongoose'
import dealSchema from './schema'

const DealModel = mongoose.model('Deal', dealSchema)

export default DealModel
