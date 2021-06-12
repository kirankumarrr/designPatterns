/**
 * Decorator Pattern (Mechanic)
 * 
 * Add additional feature to existing objects
 * 
 * 1. Modify an object dynamically
 * 2. Uses composition instead of inheritance
 * 3. More flexibility than static inheritance
 * 
 * 
 * //Example game 
 * const car = new Car('BMW')
 * const superCar = new CarTunning(car) // Updated 
 * 
*/

const { CourseBuilder, HotNew, BestSeller } = require('./CourseBuilder')

const course1 = new CourseBuilder('nick')
                .makePaid(100)
                .makeCampain()
                .build()
const HotNew_1 = new HotNew(course1)
const BestSeller_1 = new BestSeller(HotNew_1)

console.log("course1",course1);
console.log("HotNew_1",course1.getCourse(HotNew_1));
console.log("BestSeller_1",course1.getCourse(BestSeller_1));
