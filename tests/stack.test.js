const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});


// Test som är tänkt att misslyckas.
test('Funktionen "size()" returnerar antalet element som finns i stacken', () => {
    // pushar (lägger till) 3 element till stacken.
    stack.push("Jacob");
    stack.push(7);
    stack.push("Alexander");
    // Förväntad storlet (size) på stacken är 3
    expect(stack.size()).toBe(3); // Detta är tänkt att misslyckats då funktionen "size()" inte implementerats.
});