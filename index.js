const subtract = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return `one of the argument is not a number`;
    }
    if (a < b) {
        return 'a is less than b'
    }
    return a - b;
}

console.log(subtract(10, 6));

const addition = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return 'one of this is not a number';
    }
    
    return x + y;
}

console.log(addition(12, 5))

const multiply = (c, d) => {
    if (typeof c !== 'number' || typeof d !== 'number') {
        return 'one of this is not a number';
    }
   
    return c * d;

}

console.log(multiply(4, 4))