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
  }

  get breedCost() {
    let bred;
    this.bred <= 5 ?
      bred = this.bred
      :
      bred = false
    return costTable[this.rare][bred]
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

  get rare() {
    return this.rarity()
  }

  rarity() {
    const stats = this.totalStats();
    return stats >= 90 && 'Rare' || stats < 50 && 'Common' || stats < 90 && stats >= 50 && 'Uncommon'
  }

  
}

module.exports = { Dragon }
