


class User {
    constructor(){
        this._id = "";
        this.email = "";
        this.password_hash = "";
        this.createDate = new Date();
        
    }
}
class Course {
    constructor(){
        this._id = "";
        this.code = "";
        this.name = "";
        this.description = "";
        this.items = [];
        this.quizItems = [];
        this.createUserId = "";
        
    }
}

class Course_Subscription {
    constructor(){
        this._id = "";
        this.courseId = "";
        this.createUserId = "";
        this.progress = 0;
        this.isFinished = false;
        this.grade = 0;
        
    }
}

class Forum {
    constructor(){
        this._id = "";
        this.courseId = "";
        this.createUserId = "";
        this.createDate = new Date();
        this.message = "";
        
    }
}


module.exports = { 
    User: User, 
    Course: Course, 
    Course_Subscription: Course_Subscription, 
    Forum: Forum, 
}