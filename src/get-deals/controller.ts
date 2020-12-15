import { Request, Response } from 'express'
import DealDao from '../entities/deal/dao'

export default class GetDealsController {
  constructor (
    private dealDao: DealDao
  ) {}

  async execute (req: Request, res: Response) {
    try {
      const deals = await this.dealDao.find()
      return res.json(deals)
    } catch (error) {
      return res.status(500).send()
    }
  }
}
