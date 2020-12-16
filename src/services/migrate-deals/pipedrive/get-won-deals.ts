import { IPipedriveDeal } from '../../../entities/deal'
import PipedriveClient from './client'

export default class GetPipedriveWonDeals {
  constructor (
    private pipedriveClient: PipedriveClient
  ) {}

  async execute () {
    const deals = await this.pipedriveClient.getDeals()
    const wonDeals: IPipedriveDeal[] = deals.filter(({ status }) => status === 'won')
    return wonDeals
  }
}
