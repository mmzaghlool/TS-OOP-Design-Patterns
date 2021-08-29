import Beverage from './Beverage';
import CondimentDecorator from './CondimentDecorator';

export default class Milk extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    public getDescription(): string {
        if (!this.beverage) {
            return '';
        }
        return this.beverage.getDescription() + ', Milk';
    }

    public cost(): number {
        if (!this.beverage) {
            return 0;
        }
        return 0.1 + this.beverage.cost();
    }
}
