const { Breed } = require('./Breed');

class BreedCyle {
  
  constructor(dragon1, dragon2, dragon3) {
    this.dragon1 = dragon1;
    this.dragon2 = dragon2;
    this.dragon3 = dragon3,
    this.cost = 0;
  }
  

  get results() {
    const { breed1, breed2, breed3 } = this;
    return [ breed1, breed2, breed3 ]
  }

  breed1() {
    const b1 = new Breed(dragon1, dragon2);
    const { cost, result } = b1;
    this.cost += cost;
    return result
  }


  breed2() {
    const b2 = new Breed(dragon1, dragon3);
    const { cost, result } = b2;
    this.cost += cost;
    return result
  }

  breed3() {
    const b3 = new Breed(dragon2, dragon3);
    const { cost, result } = b3;
    this.cost += cost;
    return result
  }
}

module.exports = BreedCyle
