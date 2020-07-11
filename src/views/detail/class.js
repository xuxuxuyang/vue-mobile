
export class Goods {
  constructor(itemInfo, columns, service) {
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.disconntDesc;
    this.columns = columns;
    this.service = service
  }
}
