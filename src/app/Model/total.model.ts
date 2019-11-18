export class TotalModel {
  _id: string;
  total: number;
  constructor(id: string, tot: number) {
    this._id = id;
    this.total = tot;
  }
}
