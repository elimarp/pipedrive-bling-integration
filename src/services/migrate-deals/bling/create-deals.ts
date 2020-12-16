import { IPipedriveDeal } from '../../../entities/deal'
import DealDao from '../../../entities/deal/dao'
import BlingClient from './client'

export default class CreateBlingDeals {
  constructor (
    private dealDao: DealDao,
    private blingClient: BlingClient
  ) {}

  async execute (pipedriveDeals: IPipedriveDeal[]) {
    for (const pipedriveDeal of pipedriveDeals) {
      try {
        const dealAlreadyExists = await this.dealDao.findOne({ pipedriveId: pipedriveDeal.id }).exec()

        if (!dealAlreadyExists) {
          const blingDeal = await this.blingClient.createDeal(pipedriveDeal)

          if (blingDeal) {
            const { blingNumber, blingId } = blingDeal
            await this.dealDao.create({
              blingId,
              blingNumber,
              pipedriveId: pipedriveDeal.id,
              title: pipedriveDeal.title,
              value: pipedriveDeal.value,
              customer: pipedriveDeal.customer
            })
          }
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
