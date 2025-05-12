const stack = require('../src/stack');

// Funktion som körs innan varje test för att rensa stacken ifall det finns tillagda element (vi vill att stacken ska vara tom innan varje testfall körs).
beforeEach(() => {
    // En while-loop som kontrollerar ifall stacken är tom, är den inte tom så körs funktinen "pop()" som tar bort element från stacken.
    // Om "stack.peek()" inte är samma som undefined (dvs tom), poppa (ta bort) element från stacken.
    while (stack.peek() !== undefined) {
        stack.pop();
    }
});

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