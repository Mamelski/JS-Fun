function Car(color) {
    this.color = color;
}

const blueCar = new Car("blue");
let isBlueCar = blueCar instanceof Car;
console.log(isBlueCar);

const notRedCar = Car("red");
let isRedCar = notRedCar instanceof Car;
console.log(isRedCar);
