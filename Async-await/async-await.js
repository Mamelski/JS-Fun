// https://dmitripavlutin.com/javascript-async-await/

// Base function
function increaseSalary(base, increase) {
    const newSalary = base + increase;
    console.log(`New salary: ${newSalary}`);
    return newSalary;
}

// Sync addition
function slowAddition(n1,n2){
    return new Promise(resolve =>{
        setTimeout(()=>resolve(n1 + n2), 2000);
    })
}

increaseSalary(1000, 200); // => 1200
// logs "New salary: 1200"

slowAddition(1,7).then(sum => console.log('suma: ' + sum));