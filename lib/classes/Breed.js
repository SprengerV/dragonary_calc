class Breed {
  constructor(dragon1, dragon2) {
    dragon1,
    dragon2
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
    dragon1.breed();
    dragon2.breed();
    const avg = (stat1, stat2) => (stat1 + stat2) / 2
    return {
      name: name1 + '+' + name2,
      attack: avg(attack1, attack2),
      cunning: avg(cunning1, cunning2),
      defense: avg(defense1, defense2)
    }
  }
}

