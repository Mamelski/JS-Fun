// https://dmitripavlutin.com/javascript-async-await/

// Base function
function increaseSalary(base, increase) {
    const newSalary = base + increase;
    console.log(`New salary: ${newSalary}`);
    return newSalary;
}

increaseSalary(1000, 200); // => 1200
// logs "New salary: 1200"