class Bohater{
    constructor(imie) {
        this.imie = imie;
    }

    logName(){
        console.log(this.imie);
    }

    logName2 = () => {
        console.log(this.imie);
    }
}

const szymek = new Bohater("Szymek");
szymek.logName();

// tutaj lipa, bo this to globlany obiekt
setTimeout(szymek.logName, 1000);

// ale tutaj spoko
setTimeout(szymek.logName.bind(szymek), 1000);

// wow działa
setTimeout(szymek.logName2, 1000);
