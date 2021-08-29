import Beverage from './Beverage';

export default abstract class CondimentDecorator extends Beverage {
    protected beverage?: Beverage;
    public abstract getDescription(): string;
}
