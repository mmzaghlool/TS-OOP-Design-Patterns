import CashBox from './CurawellaPayment/methods/CashBox';
import ValU from './CurawellaPayment/methods/ValU';
import Payment from './CurawellaPayment/Payment';
import FixedDiscount from './CurawellaPayment/promoCodes/FixedDiscount';
import Appointment, {BOOKING_TYPES} from './CurawellaPayment/types/Appointment';
import Message from './CurawellaPayment/types/Message';

function Example() {
    let payment: Payment = new Message('');
    console.log(payment.getDescription() + ' $' + payment.cost().amount + ' $' + payment.cost().fees);
    payment = new CashBox(payment);
    console.log(payment.getDescription() + ' $' + payment.cost().amount + ' $' + payment.cost().fees);

    let payment2: Payment = new Appointment('', '', BOOKING_TYPES.ONLINE);
    console.log(payment2.getDescription() + ' $' + payment2.cost().amount + ' $' + payment2.cost().fees);
    payment2 = new FixedDiscount(payment2, 1000);
    console.log(payment2.getDescription() + ' $' + payment2.cost().amount + ' $' + payment2.cost().fees + ' $' + payment2.originalPrice);
    payment2 = new ValU(payment2);
    console.log(payment2.getDescription() + ' $' + payment2.cost().amount + ' $' + payment2.cost().fees);
}

Example();
