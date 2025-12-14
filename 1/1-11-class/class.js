// const hamburger = {
// bread: 'budget',
// fat: 40,
// meat: 'mutton'
// }



// class hamburger {
//   constructor(bread, fat, meat) {
//     this.bread = bread,
//       this.fat = fat,
//       this.meat = meat
//   }
// }

// const myHamburger = new hamburger('budget', 420, 'mutton')

// console.log(myHamburger)


class Car {
  constructor(brand) {
    this.carName = brand;
  }

  present() {
    return `I have a  ${this.carName}`
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand)
    this.model = model
  }

  show() {
    return ` ${this.present()} it is a ${this.model}`
  }
}

let myCar = new Model('saina',403)

console.log(myCar.show());
