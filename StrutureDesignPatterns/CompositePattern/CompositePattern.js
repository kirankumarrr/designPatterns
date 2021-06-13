/**
 * Composite Pattern
 * 
 * 
 * 1. Group of items or Trees
 * 2. Tree Strucute of objects
 * 3. Class hierarchies with primitive and objects
 * 4. Any level of Complexity
 * 
*/

const Course = require('./Course')
const CourseGroup = require('./CourseGroup')

const js_course = new Course('Javascript Course',100)
const bootstrap_course = new Course('Bootstrap Course',50)

const photoshop_course = new Course('Photoshop Course',150)
const sketch_course = new Course('Sketch Course',200)


const design_course = new CourseGroup('Design Courses',[photoshop_course,sketch_course])
const web_course = new CourseGroup('Web Courses',[js_course,bootstrap_course])

console.log("design_course",design_course.print());
console.log("design_course",design_course.total());

console.log("web_course",web_course.print());
console.log("web_course",web_course.total());

const ui_ux_courses = new CourseGroup('UI-UX Course',[design_course,web_course])
console.log("-----UI-UX Course--------");
console.log("ui_ux_courses",ui_ux_courses.print());
console.log("ui_ux_courses",ui_ux_courses.total());