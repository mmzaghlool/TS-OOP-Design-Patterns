import Beverage from './Beverage';

export default class HouseBlend extends Beverage {
    constructor() {
        super();
        this.description = 'House Blend Coffee';
    }

    public cost(): number {
        return 0.89;
    }
}
