import Payment from './Payment';

export default abstract class PaymentMethod extends Payment {
    protected payment?: Payment;
    public abstract getDescription(): string;
}
