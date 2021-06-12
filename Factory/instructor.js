const Person = require('./person')

class Instructor extends Person {
    constructor(type, name,position,earnings){
        super(name) 
        this.type = type; 
        this.position = position; 
        this.earnings = earnings; 
    }

    getInstructor(){
       return JSON.stringify(this) 
    }
}

module.exports = Instructor