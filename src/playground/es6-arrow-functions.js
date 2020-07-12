console.log('Connected...')

// const squre = (x) => x*x

// console.log(`The square of X is: ${squre(2)}`);

// const user = {
//   name: 'srPiesLigeros',
//   age: 7,
//   location: "New York"
// }

// function getFirstName(fullName) {
//     return fullName.split(" ")[0];
// }

// const getFirstName = (fullName) => fullName.split(" ")[0];

// const getFirstName = (user) => user.name
// console.log(getFirstName('Mike Smith'))

const user = {
    name: 'srPiesLigeros',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [2,3,4,5,6],
    multiplyBy: 3,
    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())