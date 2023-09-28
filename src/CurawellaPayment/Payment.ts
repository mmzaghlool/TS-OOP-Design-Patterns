import OrderInterface from './OrderInterface';
import ORDER_TYPES from './types/OrderTypes';
import PAYMENT_METHODS from './methods/PaymentMethods';

export default abstract class Payment implements OrderInterface {
    protected description = 'Unknown Payment';

    orderId?: number;
    uid?: string;
    paymentAuthToken?: string;
    appId?: string;

    paymentMethod?: PAYMENT_METHODS;
    type?: ORDER_TYPES;

    originalPrice?: number = undefined;

    public getDescription(): string {
        return this.description;
    }

    public insertOrder(): void {
        throw new Error('Method not implemented.');
    }

    public setPaymentDetails(orderId: number, uid: string, paymentAuthToken: string, appId: string): void {
        this.orderId = orderId;
        this.uid = uid;
        this.paymentAuthToken = paymentAuthToken;
        this.appId = appId;
    }

    public abstract cost(): {amount: number; fees: number};
}
