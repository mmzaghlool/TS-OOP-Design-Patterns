import Beverage from './Beverage';
import CondimentDecorator from './CondimentDecorator';

export default class Soy extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    public getDescription(): string {
        if (!this.beverage) {
            return '';
        }
        return this.beverage.getDescription() + ', Soy';
    }

    public cost(): number {
        if (!this.beverage) {
            return 0;
        }
        return 0.15 + this.beverage.cost();
    }
}
