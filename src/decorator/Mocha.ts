import Beverage from './Beverage';
import CondimentDecorator from './CondimentDecorator';

export default class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    public getDescription(): string {
        if (!this.beverage) {
            return '';
        }
        return this.beverage.getDescription() + ', Mocha';
    }

    public cost(): number {
        if (!this.beverage) {
            return 0;
        }
        return 0.2 + this.beverage.cost();
    }
}
