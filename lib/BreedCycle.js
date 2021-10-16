const { Breed } = require('./Breed');

class BreedCycle {
  
  constructor(dragon1, dragon2, dragon3) {
    this.dragons = [
      dragon1,
      dragon2,
      dragon3
    ];
    this.cost = 0;
    this.count = 0;
  }
  
  get results() {
    return { 
      dragons: this.breed(),
      cost: this.cost
    }
  }

  breed() {
    const results = [];
    const sortBreed = () => {
      const sorted = this.dragons.sort((a, b) => a.bred - b.bred);
      const b = new Breed(sorted[0], sorted[1]);
      const { cost, result } = b;
      results.push(result);
      this.cost += cost;
      this.count += 1;
      return this.count < 3 ?
        sortBreed()
        :
        results
    }
    return sortBreed();
  }
}

module.exports = { BreedCycle }
