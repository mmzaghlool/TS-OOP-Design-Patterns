import ORDER_TYPES, {TypesInterface} from './OrderTypes';
import Payment from '../Payment';

export enum CASH_BOX_TYPES {
    RECHARGE,
    APPOINTMENT,
    MESSAGE,
}

export default class CashBox extends Payment implements TypesInterface {
    private timestamp: string;

    constructor(timestamp: string) {
        super();

        this.description = 'CashBox';
        this.type = ORDER_TYPES.CASH_BOX;

        this.timestamp = timestamp;
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
