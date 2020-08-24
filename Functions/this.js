// NORMAL FUNCTIONS

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
//myFunction.call(myContext);  // logs { value: 'A' }
//myFunction.apply(myContext); // logs { value: 'A' }

function MyFunction() {
    this.name = 'Jakub'
    console.log(this);
}

// Konstruktor, loguje instrancję MyFunction
//new MyFunction();

// ARROW FUNCTIONS

const myObject1 = {
    myMethod1(items) {
        console.log(this);
        const callback = () => {
            console.log(this);
        };
        items.forEach(callback);
    }
};

// This jest zewnętrznym obiektem czyli myMethod1
myObject1.myMethod1([1,2,3]);