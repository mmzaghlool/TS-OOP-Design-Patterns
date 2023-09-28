import Payment from '../Payment';
import PaymentMethod from '../PaymentMethod';
import PAYMENT_METHODS from './PaymentMethods';

export default class CashBox extends PaymentMethod {
    constructor(payment: Payment) {
        super();
        this.payment = payment;

        this.paymentMethod = PAYMENT_METHODS.CASH_BOX;
    }

    public getDescription(): string {
        if (!this.payment) {
            return '';
        }
        return this.payment.getDescription() + ', CashBox';
    }

    public cost(): {amount: number; fees: number} {
        if (!this.payment) {
            return {amount: 0, fees: 0};
        }
        const {amount} = this.payment.cost();
        const fees = 0;

        return {amount, fees};
    }
}
