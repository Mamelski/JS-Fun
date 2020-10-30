// https://dmitripavlutin.com/javascript-async-await/

// Base function
function increaseSalary(base, increase) {
    const newSalary = base + increase;
    console.log(`base method salary ${newSalary}`);
    return newSalary;
}

// Sync addition
function slowAddition(n1,n2){
    return new Promise(resolve =>{
        setTimeout(()=>resolve(n1 + n2), 2000);
    })
}

// Async addition
async function increaseSalary2(base, increase){
    const newSalary = await slowAddition(base, increase);
    console.log(`async addition salary ${newSalary}`);
    return newSalary;
}

increaseSalary(1, 7);
slowAddition(1,7).then(sum => console.log(`slow addition sum ${sum}`));
increaseSalary2(1,7);
