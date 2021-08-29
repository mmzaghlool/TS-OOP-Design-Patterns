import Observer from './Observer';
import Subject from './Subject';

export default class SimpleSubject implements Subject {
    private observers: Observer[];
    private value: number = 0;

    constructor() {
        this.observers = [];
    }

    public registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    public removeObserver(o: Observer): void {
        this.observers = this.observers.filter((v) => v !== o);
    }

    public notifyObservers(): void {
        this.observers.forEach((observer) => observer.update(this.value));
    }

    public setValue(v: number) {
        this.value = v;
        this.notifyObservers();
    }
}
