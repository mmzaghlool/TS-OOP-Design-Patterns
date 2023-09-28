import ORDER_TYPES, {TypesInterface} from './OrderTypes';
import Payment from '../Payment';

export enum BOOKING_TYPES {
    ONLINE,
    CLINIC,
}

export default class Appointment extends Payment implements TypesInterface {
    private appointTimestamp: string;
    private doctorUid: string;
    private isCorona: boolean = false;
    private bookingType: BOOKING_TYPES;
    private clinicId?: number;

    constructor(doctorUid: string, appointTimestamp: string, bookingType: BOOKING_TYPES, clinicId?: number) {
        super();

        this.description = 'Appointment';
        this.type = ORDER_TYPES.APPOINTMENT;

        this.appointTimestamp = appointTimestamp;
        this.doctorUid = doctorUid;
        this.bookingType = bookingType;
        this.clinicId = clinicId;
    }

    insertData(): void {
        throw new Error('Method not implemented.');
    }

    getAmount(): number {
        return 10000;
    }

    public cost(): {amount: number; fees: number} {
        return {amount: this.getAmount(), fees: 0};
    }
}
