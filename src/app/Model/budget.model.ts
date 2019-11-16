export class BudgetModel {
  id: string;
  amount: number;
  description: string;
  type: string;
  constructor(amount: number, desc: string, type: string) {
    this.amount = amount;
    this.description = desc;
    this.type = type;
  }
}
