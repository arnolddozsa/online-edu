const Entities = require("../../../Entities.js");

export default async function handler(req, res){
    
    try {
        

        if(req.user.isTeacher){
            throw new Error("Tanár nem íratkozhat fel kurzusra")
        }

        

        var course = await req.control.daoCtx.Get(Entities.Course, {code: req.body.code});
        try {
            
            var subscription = await req.control.daoCtx.Get(Entities.Course_Subscription, {courseId: course._id, createUserId: req.user._id});
        } catch (error) {
            throw new Error("Erre a kurzusra nem vagy felíratkozva");
            
        }

        if(subscription.progress < course.items.length){
            throw new Error("Még nem végeztél anyaggal!");
        }
        
        
        if(course.quizItems.length > 0){

            var gradeMap = [60, 70, 80, 90];

            var correctAnswers = 0;
            for(var i in course.quizItems){
                var correct = course.quizItems[i].correctAnswer == subscription.answers[i];
                if(correct){
                    correctAnswers++;
                }
            }
            subscription.percentage = (correctAnswers / course.quizItems.length) * 100;
            var i = 0;
            while(subscription.percentage > gradeMap[i]){
                i++;
            }
            subscription.grade = i+1;

        } else{
            subscription.grade = 5;
            subscription.percentage = 100;
        }
        

        if(course.quizItems.length > 0 && (subscription.grade == undefined || subscription.grade == 0)){
            throw new Error("Ki kell töltened a tesztet a kurzus befejezéséhez!");
        }



        subscription.isFinished = true;
        await req.control.daoCtx.Update(subscription);

        res.status(200).json(subscription);
    } catch (error) {
        res.status(500);
        res.json({message: error.message});
    }


}