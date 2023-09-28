import Payment from '../Payment';
import PaymentMethod from '../PaymentMethod';

export default class FixedDiscount extends PaymentMethod {
    discount: number;
    constructor(payment: Payment, discount: number) {
        super();
        this.payment = payment;
        this.discount = discount;
    }

    public getDescription(): string {
        if (!this.payment) {
            return '';
        }
        return this.payment.getDescription() + ', FixedDiscount';
    }

    public cost(): {amount: number; fees: number} {
        if (!this.payment) {
            return {amount: 0, fees: 0};
        }
        const {amount, fees} = this.payment.cost();
        this.originalPrice = amount;

        return {amount: amount - this.discount, fees};
    }
}
