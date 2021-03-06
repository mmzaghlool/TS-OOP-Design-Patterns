import Beverage from './decorator/Beverage';
import DarkRoast from './decorator/DarkRoast';
import Espresso from './decorator/Espresso';
import HouseBlend from './decorator/HouseBlend';
import Mocha from './decorator/Mocha';
import Soy from './decorator/Soy';
import Whip from './decorator/Whip';

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
