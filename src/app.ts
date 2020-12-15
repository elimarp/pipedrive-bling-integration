import express from 'express'
// import { migrateDealsController } from './migrate-deals'
import { getDealsController } from './get-deals'

const app = express()

// You may wanna test the migrations this way (no response):
// app.post('/api/v1/migrate-deals', () => migrateDealsController.execute())

app.get('/api/v1/deals', (req, res) => getDealsController.execute(req, res))

export default app
