// https://dmitripavlutin.com/javascript-async-await/

//Base function
function increaseSalary(base, increase) {
    const newSalary = base + increase;
    console.log(`base method salary ${newSalary}`);
    return newSalary;
}

//Sync addition
function slowAddition(n1,n2){
    return new Promise(resolve =>{
        setTimeout(()=>resolve(n1 + n2), 2000);
    })
}

//Async addition
async function increaseSalary2(base, increase){
    const newSalary = await slowAddition(base, increase);
    console.log(`async addition salary ${newSalary}`);
    return newSalary;
}

//The broken async
function slowAdditionBroken(n1,n2){
    return new Promise((resolve, reject) => {
        setTimeout(()=>reject(new Error(`Unable to sum`)),3000);
    })
}

async function increaseSalaryBroken(base, increase){
    let newSalary;
    try{
        newSalary = await slowAdditionBroken(base, increase);
    } catch (e) {
        console.log(`Error: ${e}`);
        newSalary = base*2;
    }
    console.log(`New salary: ${newSalary}`);
    return newSalary;
}

increaseSalary(1, 7);
slowAddition(1,7).then(sum => console.log(`slow addition sum ${sum}`));
increaseSalary2(1,7);
slowAdditionBroken(1,7).catch(e => console.log(e.message));
increaseSalaryBroken(1,7);
