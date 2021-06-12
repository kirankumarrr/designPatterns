const Person = require('./person')

class Student extends Person {
    constructor(type,name,level){
        super(name);
        this.type = type; 
        this.level = level;
    }

    getStudent(){
        return JSON.stringify(this)
    }
}

module.exports = Student