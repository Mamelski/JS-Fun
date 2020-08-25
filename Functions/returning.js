function myFunction() {
    return 42;
}

//No wiadomka zwraca
console.log(myFunction(31)); // => 42

function myEmptyFunction() {
    42;
}

function myEmptyFunction2() {
    42;
    return;
}

// No nic nie zwraca samo z siebie
myEmptyFunction();  // => undefined
myEmptyFunction2(); // => undefined

const increment = (num) => num + 1;

console.log(increment(11)); // => 42

// A to śmieszne, jeśli są klamry to zwraca undefined
const increment2 = (num) => {num + 1;}

console.log(increment2(11)); // => 42
