import env from './configs/environment'
import app from './app'
import { CronJob } from 'cron'
import mongoose from 'mongoose'
import { migrateDealsController } from './services/migrate-deals'

const PORT = env.locals.PORT || 3000

const init = async () => {
  // const job = new CronJob('0,10,20,30,40,50 * * * * *', () => { // Runs every 10 seconds
  const job = new CronJob('00 00 2 * * 0-6', () => { // Runs every day at 2AM.
    console.log('Migrating deals...', new Date().toLocaleString())
    migrateDealsController.execute()
  }, () => { }, true)

  await mongoose.connect(`mongodb+srv://${env.database.USERNAME}:${env.database.PASSWORD}@cluster0.6vyyq.mongodb.net/${env.database.NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Connected to DB'))

init().then(() => {
  app.listen(PORT, () => console.log(`Listening ${PORT}`))
})
