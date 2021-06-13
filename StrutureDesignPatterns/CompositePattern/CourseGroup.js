class CourseGroup{
    constructor(title,composite=[]){
        this.title = title
        this.composite = composite
    }

    // we should use same method but logic can be different inside it
    total(){
        // loop through each course and create sum
        return this.composite.reduce((sum,course)=> {
            sum +=  course.total()
            return sum
        },0)
    }

    print(){
        return this.composite.map(course=>course.print())
    }
}

module.exports = CourseGroup