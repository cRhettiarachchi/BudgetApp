export class AllIncome {

    type: string;
    amount: number;
    desc: string;

    constructor(amount: number, desc: string){
        this.type = "income";
        this.amount = amount;
        this.desc  = desc;
    }
}
