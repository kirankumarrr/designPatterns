class Course {
    constructor(data) {
      this.name = data.name
      this.project = data.project
      this.completed = data.completed || false
    }
  }
  
  const CourseServices = (() => {
    return {
      completed: (course) => {
        course.completed = true
        return `Completing course ${course.name}`
      },
      save: (course) => {
        course.completed = true
        return `Saving course ${course.name}`
      },
    }
  })()
  
  const CourseServicesFacade = (() => {
    const complete = (course) => {
      CourseServices.completed(course)
  
      if (course.completed) {
        CourseServices.save(course)
      }
    }
  
    return {
      completedMethod: complete,
    }
  })()
  
  module.exports = { Course, CourseServices, CourseServicesFacade }
  