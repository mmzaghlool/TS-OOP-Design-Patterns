enum ORDER_TYPES {
    APPOINTMENT,
    SERVICE,
    MESSAGE,
    CASH_BOX,
}

export interface TypesInterface {
    getAmount(): number;
    insertData(): void;
}

export default ORDER_TYPES;
