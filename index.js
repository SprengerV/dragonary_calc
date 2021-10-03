const { Dragon, Breed, BreedCycle } = require('./lib/classes'); 

const BlazeUtiss = new Dragon('Blaze Utiss', 8, 7, 15, 0);
const SirrushDutag = new Dragon('Sirrush Dutag', 12, 8, 10);
const ChoryrthFinola = new Dragon('Choryrth Finola', 7, 14, 9)

console.log(BlazeUtiss.name);

console.log(BlazeUtiss.bred);
const breed = new Breed(BlazeUtiss, SirrushDutag);
console.log(breed.dragons);
console.log(breed.result);
console.log('BUb: ' + BlazeUtiss.bred + '\nSDb: ' + SirrushDutag.bred);
