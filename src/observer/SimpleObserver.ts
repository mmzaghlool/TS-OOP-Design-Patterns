import Observer from './Observer';
import Subject from './Subject';

export default class SimpleObserver implements Observer {
    private value?: number;
    private simpleSubject: Subject;

    constructor(simpleSubject: Subject) {
        this.simpleSubject = simpleSubject;
    }

    update(value: number): void {
        this.value = value;
        this.display();
    }

    display() {
        console.log('Value: ', this.value);
    }
}
