/**
 * Builder Pattern / COMPOSITION
 * 
 * Suppose a customize computer then we should this patter
 * assume that we have boxes and its has label on it to differentiate,
 * so we can get any detail easily
 * 
 * To simplify the constructor of a complex object
 * To sepate the constructor and representation
 * COMPOSITION
 * Different representation for the object that is constructed 
 * 
 * ISSUES : To know what exactly this parameters are?
 * we can only say if we see the Person implementation
 *                              ?     ?    ?    ? 
 * const person = new Person('nick',true,false,true)
 * 
 * fix around 
 * const person = new Person('nick').employee().manager().partTime(12)
*/

const CourseBuilder = require('./CourseBuilder')

const course1 = new CourseBuilder('nick')
                .makePaid(100)
                .makeCampain()
const course2 = new CourseBuilder('nick').build()

console.log("course1",course1);
console.log("course2",course2);