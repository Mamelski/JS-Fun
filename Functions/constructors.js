function Car(color) {
    this.color = color;
}

const blueCar = new Car("blue");
let isBlueCar = blueCar instanceof Car;
console.log(isBlueCar);

const notRedCar = Car("red");
let isRedCar = notRedCar instanceof Car;
console.log(isRedCar);

// Arrow functions cant be constructors
// const Car1 = (color) => {
//     this.color = color;
// };
//
// const redCar = new Car1('red');