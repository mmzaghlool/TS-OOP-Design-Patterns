export default abstract class Beverage {
    protected description = 'Unknown Beverage';

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}
