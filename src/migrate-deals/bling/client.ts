import Axios from 'axios'
import env from '../../configs/environment'
import * as js2xmlparser from 'js2xmlparser'
import qs from 'qs'
import { IPipedriveDeal } from '../../entities/deal'

interface ICreateDealResponse {
  blingNumber: number
  blingId: number
}

export default class BlingClient {
  async createDeal (pipedriveDeal: IPipedriveDeal): Promise<ICreateDealResponse | null> {
    const response = await Axios({
      method: 'post',
      url: 'https://bling.com.br/Api/v2/pedido/json/',
      data: qs.stringify({
        apikey: env.externals.BLING_API_KEY,
        xml: js2xmlparser.parse('pedido', {
          cliente: {
            nome: pipedriveDeal.customer.name,
            fone: pipedriveDeal.customer.phones[0],
            email: pipedriveDeal.customer.emails[0]
          },
          obs: pipedriveDeal.title,
          itens: {
            item: [
              {
                codigo: pipedriveDeal.id,
                descricao: pipedriveDeal.title,
                un: 'Total',
                qtde: '1',
                vlr_unit: pipedriveDeal.value
              }
            ]
          }
        })
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })

    if (response.data.retorno && response.data.retorno.pedidos && response.data.retorno.pedidos[0]) {
      const { numero: blingNumber, idPedido: blingId } = response.data.retorno.pedidos[0]
      return { blingNumber, blingId }
    }
    return null
  }
}
