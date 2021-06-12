/**
 * Singleton Pattern
 *  * Singleton pattern doesn't allow you to create new instance every time, instead using reference it server the needs

 * 
 * Example: Buying a Course once, if you try to buy its doesn't allow you.
 * Better real time example is use it once for migreations
 *
 * Hardware access
 * Database connections
 * Config files 
 * sharing a single washing machine among all the residents in a hotel
*/

const Singleton = (()=>{
    let course;

    const assignCourse = () => {
        const course = new Object('Javascript')
        return course;
    }

    return {
        getInstance : () => {
            if(!course) {
                return assignCourse;
            }
            return course
        }
    }

})();

const buyingCourseFirstTime = Singleton.getInstance()
const buyingCourseSecondTime = Singleton.getInstance()
console.log("buyingCourseFirstTime",buyingCourseFirstTime);
console.log("buyingCourseSecondTime",buyingCourseSecondTime);
if(buyingCourseFirstTime === buyingCourseSecondTime){
    console.log("Course already bought");
}