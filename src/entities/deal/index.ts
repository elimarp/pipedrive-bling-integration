import DealDao from './dao'
import DealModel from './model'

type PipedriveDealCustomerEmail = {
  label: string,
  value: string,
  primary: boolean
}

type PipedriveDealCustomerPhone = {
  label: string,
  value: string,
  primary: boolean
}

export interface IPipedriveDeal {
  id: number
  title: string
  value: number
  status: string
  customer: {
    name: string
    emails: PipedriveDealCustomerEmail[]
    phones: PipedriveDealCustomerPhone[]
  }
}

export const dealDao = new DealDao(DealModel)
