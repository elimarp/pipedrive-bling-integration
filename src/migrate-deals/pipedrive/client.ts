import Axios from 'axios'
import env from '../../configs/environment'
import { IPipedriveDeal } from '../../entities/deal'

export default class PipedriveClient {
  async getDeals (): Promise<IPipedriveDeal[]> {
    const response = await Axios.get(`https://api.pipedrive.com/v1/deals?api_token=${env.externals.PIPEDRIVE_API_TOKEN}`)
    if (!response.data.success || !response.data.data) throw new Error('Pipedrive request failed')

    const deals = response.data.data.map(({
      id,
      title,
      value,
      status,
      person_id: { name: customerName, email: customerEmails, phone: customerPhones }
    }) => ({
      id,
      title,
      value,
      status,
      customer: { name: customerName, emails: customerEmails, phones: customerPhones }
    }))

    return deals
  }
}
