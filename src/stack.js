const _ = require('underscore');

let stack = [];

// Lägger till element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    return stack.pop();
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return _.last(stack);
}

// Returnerar antalet element som finns i stacken.
exports.size = function () {
    return stack.length;
};