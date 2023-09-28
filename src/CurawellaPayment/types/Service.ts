import ORDER_TYPES, {TypesInterface} from './OrderTypes';
import Payment from '../Payment';

export default class Service extends Payment implements TypesInterface {
    private servicesAppointmentId: number;

    constructor(servicesAppointmentId: number) {
        super();

        this.description = 'Service';
        this.type = ORDER_TYPES.SERVICE;

        this.servicesAppointmentId = servicesAppointmentId;
    }

    insertData(): void {
        throw new Error('Method not implemented.');
    }

    getAmount(): number {
        return 50000;
    }

    public cost(): {amount: number; fees: number} {
        return {amount: this.getAmount(), fees: 0};
    }
}
