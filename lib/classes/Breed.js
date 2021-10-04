const { Dragon } = require('./Dragon');

class Breed {
  constructor(dragon1, dragon2) {
    this.dragon1 = dragon1;
    this.dragon2 = dragon2;
  }

  get dragons() {
    return [
      this.dragon1,
      this.dragon2
    ]
  }

  get cost() {
    const { breedCost: breedCost1 } = this.dragon1;
    const { breedCost: breedCost2 } = this.dragon2;
    return breedCost1 > breedCost2 && breedCost1 || breedCost2;
  }

  get result() {
    return this.breed()
  }

  breed() {
    const { 
      name: name1,
      stats: stats1 
    } = this.dragon1;
    const {
      name: name2,
      stats: stats2 
    } = this.dragon2;
    const { 
      attack: attack1,
      cunning: cunning1,
      defense: defense1 
    } = stats1;
    const {
      attack: attack2,
      cunning: cunning2,
      defense: defense2 
    } = stats2;
    this.dragon1.breed();
    this.dragon2.breed();
    const avgMult = (stat1, stat2) => 1.2 * (stat1 + stat2) / 2
    return new Dragon(
      `${name1} + ${name2}`,
      avgMult(attack1, attack2),
      avgMult(cunning1, cunning2),
      avgMult(defense1, defense2)
    )
  }
}

module.exports = { Breed }
