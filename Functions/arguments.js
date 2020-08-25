function myFunction() {
    console.log(arguments);
}
// arguments to tak jakby specjalny obiekt
myFunction('a', 'b'); // logs { 0: 'a', 1: 'b'}


// arguments są znowu brane z kontekstu czyli tego co jest wyżej.
function myRegularFunction() {
    const myArrowFunction = () => {
        console.log(arguments);
    }

    myArrowFunction('c', 'd');
}

myRegularFunction('a', 'b'); // logs { 0: 'a', 1: 'b' }


// rest parameters działają idealnie :)
function myRegularFunction() {
    const myArrowFunction = (...args) => {
        console.log(args);
    }

    myArrowFunction('c', 'd');
}

myRegularFunction('a', 'b'); // logs { 0: 'c', 1: 'd' }