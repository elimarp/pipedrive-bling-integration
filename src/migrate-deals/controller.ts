import CreateBlingDeals from './bling/create-deals'
import GetPipedriveWonDeals from './pipedrive/get-won-deals'

export default class MigrateDealsController {
  constructor (
    private getPipedriveWonDeals: GetPipedriveWonDeals,
    private createBlingDeals: CreateBlingDeals
  ) { }

  async execute (): Promise<void> {
    try {
      const deals = await this.getPipedriveWonDeals.execute()
      await this.createBlingDeals.execute(deals)
    } catch (error) {
      console.error(error)
    }
  }
}
