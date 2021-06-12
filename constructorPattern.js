/**
 * WHEN TO USE CONSTRUCTOR PATTER 
 * 
 * EX :
 * 1. QUESTIONS
 * 2. CREATING USERS
 * 
 * USER :
 * INHERITANCE PATTER
 * METHODS WHICH PRE_HARDCODED AS VALUES WE CREATED INITIALLY
*/

var User = function(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    this.getUserName = function (){
        return `${this.firstName} ${this.lastName}`
    }
    
}

const user1 = new User('Beast', 'wolf')
console.log(user1.getUserName())
const user2 = new User('Mike', 'Tyson')
console.log(user2.getUserName())

//USING ES6 

class Browser {
    constructor(engine,speed){
        this.engine = engine;
        this.speed = speed;
    }

    getBrowser(){
        return `${this.engine} ${this.speed}`
    }

}
const browser1 = new Browser('V8', 'fast')
console.log(browser1.getBrowser())
const browser2 = new Browser('SpiderMonkey', 'medium')
console.log(browser2.getBrowser())