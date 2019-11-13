export class BudgetModel {
  id: number;
  amount: number;
  description: string;
  type: string;
  constructor(id: number, amount: number, desc: string, type: string) {
    this.id = id;
    this.amount = amount;
    this.description = desc;
    this.type = type;
  }
}
