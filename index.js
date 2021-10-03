const { Dragon } = require('./lib/classes/Dragon');

const saezio = new Dragon('saezio', 20, 20, 20, 1);

console.log('1: ' + saezio.bred);
console.log('cost1: ' + saezio.breedCost);
saezio.breed();
console.log('2: ' + saezio.bred);
console.log('cost2: ' + saezio.breedCost);
