const Instructor = require('./instructor')
const Student = require('./students')

const useFactory = (type,name,position,earnings=0,level='Beginner') => {
    if(type==='Instructor'){
        return new Instructor(type,name,position,earnings)
    }
    if(type==='Student'){
        return new Student(type,name,level)
    }
} 


module.exports = useFactory