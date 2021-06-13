/**
 * Facade Pattern
 *
 *
 * 1. Provides convenient higher-level interface
 * 2. Hide complex code (logic)
 * 3. Facede = wrappers
 * 4. Readable code
 *
 */
 const { Course, CourseServices, CourseServicesFacade } = require('./Course')

 const myCourse = new Course({ name: 'Javascript', project: 'E-Commerce' })
 
 console.log('myCourse', myCourse)
 
 // here issue is code logic is avaiable in main.js
 // need to move from here by adding wrapper: called facadepattern
 
 // CourseServices.completed(myCourse)
 
 // if(myCourse.completed){
 //     CourseServices.save(myCourse)
 // }
 
 CourseServicesFacade.completedMethod(myCourse)
 
 console.log('myCourse', myCourse)
 