/**
 * CONCEPT OF INHERITANCE
 * 
 * DNA IS GOOD EXAMPLE
 * 
 * CONSTRUCTOR : EYES,HAIR
 * PROTOTYPE  :DNA
*/


class Browser {
    constructor(engine,speed){
        this.engine = engine;
        this.speed = speed;
    }
}

//Access to all the Browser via __proto__
Browser.prototype.getBrowser= function (){
    return `${this.engine} ${this.speed}`
}

const browser1 = new Browser('V8', 'fast')
console.log(browser1.getBrowser())

