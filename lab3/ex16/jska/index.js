function Rabbit() {}
Rabbit.prototype = {
    eats: true
};
let rabbit = new Rabbit();

Rabbit.prototype = {};
Rabbit.prototype.eats = false;
delete rabbit.eats;
delete Rabbit.prototype.eats;

console.log(rabbit.eats); // true