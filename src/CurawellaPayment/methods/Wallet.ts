import Payment from '../Payment';
import PaymentMethod from '../PaymentMethod';
import PAYMENT_METHODS from './PaymentMethods';

export default class Wallet extends PaymentMethod {
    paymentPhoneNumber: string;

    constructor(payment: Payment, paymentPhoneNumber: string) {
        super();
        this.payment = payment;

        this.paymentMethod = PAYMENT_METHODS.WALLET;
        this.paymentPhoneNumber = paymentPhoneNumber;
    }

    public getDescription(): string {
        if (!this.payment) {
            return '';
        }
        return this.payment.getDescription() + ', Wallet';
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
