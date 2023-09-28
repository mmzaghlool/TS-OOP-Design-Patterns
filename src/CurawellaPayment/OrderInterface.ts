import ORDER_TYPES from './types/OrderTypes';
import PAYMENT_METHODS from './methods/PaymentMethods';

export default interface OrderInterface {
    orderId?: number;
    uid?: string;
    // paymentTime?: string;
    paymentAuthToken?: string;
    appId?: string;

    paymentMethod?: PAYMENT_METHODS;
    type?: ORDER_TYPES;

    // amount?: number;
    // fees?: number;
    // total?: number;
    // originalPrice?: number;

    // paymentPhoneNumber?: string;
    // cardToken?: string;
}
