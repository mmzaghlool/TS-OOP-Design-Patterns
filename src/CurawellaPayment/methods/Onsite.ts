import Payment from '../Payment';
import PaymentMethod from '../PaymentMethod';
import PAYMENT_METHODS from './PaymentMethods';

export default class Onsite extends PaymentMethod {
    constructor(payment: Payment) {
        super();
        this.payment = payment;

        this.paymentMethod = PAYMENT_METHODS.ONSITE;
    }

    public getDescription(): string {
        if (!this.payment) {
            return '';
        }
        return this.payment.getDescription() + ', Onsite';
    }

    public cost(): {amount: number; fees: number} {
        if (!this.payment) {
            return {amount: 0, fees: 0};
        }
        const {amount} = this.payment.cost();

        return {amount, fees: 0};
    }
}
