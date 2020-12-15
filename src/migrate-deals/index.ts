import { dealDao } from '../entities/deal'
import BlingClient from './bling/client'
import CreateBlingDeals from './bling/create-deals'
import MigrateDealsController from './controller'
import PipedriveClient from './pipedrive/client'
import GetPipedriveWonDeals from './pipedrive/get-won-deals'

const pipedriveClient = new PipedriveClient()
const blingClient = new BlingClient()
const getPipedriveWonDeals = new GetPipedriveWonDeals(pipedriveClient)
const createBlingDeals = new CreateBlingDeals(dealDao, blingClient)
const migrateDealsController = new MigrateDealsController(getPipedriveWonDeals, createBlingDeals)

export {
  migrateDealsController
}
