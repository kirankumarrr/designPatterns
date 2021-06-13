class Course {
    constructor(title,price){
        this.title = title
        this.price = price
    }

    total(){
        return this.price
    }

    print(){
        return `${this.title} - ${this.price}`
    }

}

module.exports = Course