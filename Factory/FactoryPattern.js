/**
 * Factory Pattern
 * 
 * 
 * For eg: factory produces many products(car,motor,buses)
 * Factory may have sub factories
 * End user doesn't care about production process
 * He cares only how to sale a product
 * 
 * Advantages
 * 1. To seprate the object creation from its implementation
 * 2. To create a different instance based on conditions
 * 3 .Not exposes the constructors of the objects, preventing their modifications

    Abstract Factory vs Factory(Going with this as of now in JS)

*/

const userFactory = require('./userFactory')

const paul = userFactory('Instructor','Paul','Software Engineer',1000);

const nick = userFactory('Student','nick','Beginner');

console.log(`paul`,paul);
console.log(`nick`,nick);