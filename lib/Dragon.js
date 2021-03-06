const costTable = require('../src/costTable');

class Dragon {
  constructor(name, attack, cunning, defense, breeds = 0) {
    this.name = name;
    this.stats = {
      attack,
      cunning,
      defense
    };
    this.breeds = breeds;    
    this.rarity = this.rarity();
  }

  get breedCost() {
    let bred;
    this.bred <= 5 ?
      bred = this.bred
      :
      bred = false
    return costTable[this.rarity] ?
      costTable[this.rarity][bred]
      :
      150
  }

  get bred() {
    return this.breeds
  }

  breed() {
    this.breeds = this.breeds + 1;
  }

  totalStats() {
    const { attack, cunning, defense } = this.stats;
    return attack + cunning + defense
  }

  rarity() {
    const stats = this.totalStats();
    return stats >= 90 && 'Rare' || stats < 50 && 'Common' || stats < 90 && stats >= 50 && 'Uncommon'
  }

  
}

module.exports = { Dragon }
