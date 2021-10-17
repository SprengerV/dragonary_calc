const { Dragon } = require('./Dragon');

class Breed {
  constructor(dragon1, dragon2) {
    this.dragons = {
      dragon1,
      dragon2
    }
  }

  get cost() {
    const { dragon1, dragon2, result } = this.dragons;
    const { 
      breedCost: breedCost1,
      rarity: rarity1
    } = dragon1;
    const {
      breedCost: breedCost2,
      rarity: rarity2
    } = dragon2;
    const { rarity: finalRarity } = result;
    let baseCost;
    breedCost1 > breedCost2 ?
      baseCost = breedCost1
      : 
      baseCost = breedCost2
    return finalRarity === 'Uncommon' && rarity1 === 'Common' && rarity1 === rarity2 ||
      finalRarity === 'Rare' && rarity1 === 'Uncommon' && rarity1 === rarity2 ?
        baseCost * 1.5
        :
        baseCost
  }

  get result() {
    return this.breed()
  }

  breed() {
    const { dragon1, dragon2 } = this.dragons;
    const { 
      name: name1,
      stats: stats1 
    } = dragon1;
    const {
      name: name2,
      stats: stats2 
    } = dragon2;
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
    const avgMult = (stat1, stat2) => Math.round(1.2 * (stat1 + stat2) / 2)
    const dragon = new Dragon(
      `/${name1} + ${name2}/`,
      avgMult(attack1, attack2),
      avgMult(cunning1, cunning2),
      avgMult(defense1, defense2)
    )
    console.log(dragon);
    this.dragons.result = dragon;
    const cost = this.cost;
    dragon1.breed();
    dragon2.breed();
    return {
      dragon,
      cost
    }
  }
}

module.exports = { Breed }
