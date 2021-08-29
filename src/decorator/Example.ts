import Beverage from './Beverage';
import DarkRoast from './DarkRoast';
import Espresso from './Espresso';
import HouseBlend from './HouseBlend';
import Mocha from './Mocha';
import Soy from './Soy';
import Whip from './Whip';

function Example() {
    const beverage: Beverage = new Espresso();
    console.log(beverage.getDescription() + ' $' + beverage.cost());

    let beverage2: Beverage = new DarkRoast();
    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);
    console.log(beverage2.getDescription() + ' $' + beverage2.cost());

    let beverage3: Beverage = new HouseBlend();
    beverage3 = new Soy(beverage3);
    beverage3 = new Mocha(beverage3);
    beverage3 = new Whip(beverage3);
    console.log(beverage3.getDescription() + ' $' + beverage3.cost());
}

Example();
