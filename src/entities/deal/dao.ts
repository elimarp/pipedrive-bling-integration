import DealModel from './model'

export default class DealDao {
  constructor (
    private dealModel: typeof DealModel
  ) {}

  find () {
    return this.dealModel.find()
  }

  findOne (obj: object) {
    return this.dealModel.findOne(obj)
  }

  create (obj: object) {
    return this.dealModel.create(obj)
  }
}
