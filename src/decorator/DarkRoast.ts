import Beverage from './Beverage';

export default class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = 'Dark Roast Coffee';
    }

    public cost(): number {
        return 0.99;
    }
}
