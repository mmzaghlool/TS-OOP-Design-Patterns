import SimpleObserver from './SimpleObserver';
import SimpleSubject from './SimpleSubject';

function Example() {
    console.log('start');

    const simpleSubject = new SimpleSubject();

    const simpleObserver = new SimpleObserver(simpleSubject);
    simpleSubject.registerObserver(simpleObserver);

    const simpleObserver2 = new SimpleObserver(simpleSubject);
    simpleSubject.registerObserver(simpleObserver2);

    simpleSubject.setValue(100);

    simpleSubject.removeObserver(simpleObserver);
    simpleSubject.setValue(10);
}

Example();
