const subtract = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number'){
        return `one of the argument is not a number`;
    }
    if (a < b ){
        return 'a is less than b'
    }
 return a - b;
}

console.log(subtract(12, 6));

