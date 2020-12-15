import { dealDao } from '../entities/deal'
import GetDealsController from './controller'

const getDealsController = new GetDealsController(dealDao)

export {
  getDealsController
}
