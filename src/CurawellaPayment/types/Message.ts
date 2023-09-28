import ORDER_TYPES, {TypesInterface} from './OrderTypes';
import Payment from '../Payment';

export default class Message extends Payment implements TypesInterface {
    private doctorUid: string;

    constructor(doctorUid: string) {
        super();

        this.description = 'Message';
        this.type = ORDER_TYPES.MESSAGE;

        this.doctorUid = doctorUid;
    }

    insertData(): void {
        throw new Error('Method not implemented.');
    }

    getAmount(): number {
        return 100;
    }

    public cost(): {amount: number; fees: number} {
        return {amount: this.getAmount(), fees: 0};
    }
}
