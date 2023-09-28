import Payment from '../Payment';
import PaymentMethod from '../PaymentMethod';
import PAYMENT_METHODS from './PaymentMethods';

export default class Token extends PaymentMethod {
    cardToken: string;

    constructor(payment: Payment, cardToken: string) {
        super();
        this.payment = payment;

        this.paymentMethod = PAYMENT_METHODS.TOKEN;
        this.cardToken = cardToken;
    }

    public getDescription(): string {
        if (!this.payment) {
            return '';
        }
        return this.payment.getDescription() + ', Token';
    }

    public cost(): {amount: number; fees: number} {
        if (!this.payment) {
            return {amount: 0, fees: 0};
        }
        const {amount} = this.payment.cost();
        const fees = amount + 300 + 0.03 * amount;

        return {amount, fees};
    }
}
