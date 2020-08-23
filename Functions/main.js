// This to globlany obiekt czyli window
function myFunction() {
    console.log(this);
}

// This jest teraz myObjectem
const myObject = {
    method() {
        console.log(this);
    }
};

//myFunction();
//myObject.method();

const myContext = { value: 'A' };

// myContect jako pierwszy parametr jest thisem
myFunction.call(myContext);  // logs { value: 'A' }
myFunction.apply(myContext); // logs { value: 'A' }
