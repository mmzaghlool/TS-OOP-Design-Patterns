import Payment from '../Payment';
import PaymentMethod from '../PaymentMethod';
import PAYMENT_METHODS from './PaymentMethods';

export default class ValU extends PaymentMethod {
    constructor(payment: Payment) {
        super();
        this.payment = payment;

        this.paymentMethod = PAYMENT_METHODS.VAL_U;
    }

    public getDescription(): string {
        if (!this.payment) {
            return '';
        }
        return this.payment.getDescription() + ', ValU';
    }

    public cost(): {amount: number; fees: number} {
        if (!this.payment) {
            return {amount: 0, fees: 0};
        }
        const {amount} = this.payment.cost();
        const fees = amount + 500 + 0.03 * amount;

        return {amount, fees};
    }
}
