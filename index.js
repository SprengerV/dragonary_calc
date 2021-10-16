const { Dragon } = require('./lib/Dragon');
const { BreedCycle } = require('./lib/BreedCycle');
const { Calculate } = require('./lib/Calculate');

const BlazeUtiss = new Dragon('Blaze Utiss', 8, 7, 15, 0);
const SirrushDutag = new Dragon('Sirrush Dutag', 12, 8, 10);
const ChoryrthFinola = new Dragon('Choryrth Finola', 7, 14, 9);

const calculate = new Calculate(BlazeUtiss, SirrushDutag, ChoryrthFinola, 3, 'Rare');
console.log(`Total: ${calculate.total} CYT`);
