const { BreedCycle } = require('./BreedCycle');

class Calculate {
  constructor (dragon1, dragon2, dragon3, qty = 3, rarity = 'Rare') {
    this.dragons = [
      dragon1,
      dragon2,
      dragon3
    ];
    this.targetQty = qty;
    this.targetRarity = rarity;
    this.totalCost = 0;
  }

  
  get total() {
    return this.go();
  }

  go() {
    
    const cycle = new BreedCycle(...this.dragons).results;
    const { dragons, cost } = cycle;
    console.log(`CYCLE COST: ${cost}`);
    this.totalCost += cost;
    console.log(`CUMULATIVE: ${this.totalCost}`)
    this.dragons = [...dragons]
    return dragons
      .filter(item => item.rarity === this.targetRarity)
      .length === this.targetQty ?
        this.totalCost
        :
        this.go()
  }
}

module.exports = { Calculate }
