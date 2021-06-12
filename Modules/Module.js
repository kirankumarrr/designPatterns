/**
 * WHEN TO USE MODULAR PATTER
 * 
 * EX : Chef want to cook 
 * here suppose instead of storing meat/vegs in single fridge
 * 
 * he maintains different fridge:
 * 1. meat fridge
 * 2. vegs fridge
 * 
 * uses its according whens its needed
 * 
 * ADVANTAGES
 * 1. MAINTAINABILITY (avoid DRY)
 * 2. NAMESPACING ( Global variables(BAD PRACTISE), namespace pollution)
 * 3. REUSABILITY ( reuse code in different projects)
*/
const browserDB = require('./DB')

class Browser {
    constructor({id,engine,speed} ={}){
        this.id = id;
        this.speed = speed;
        this.engine = engine;
    }

    DBRequest(){
        return browserDB.dbInfo(this)
    }
}

module.exports = Browser