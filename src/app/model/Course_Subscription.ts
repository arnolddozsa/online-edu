import { CourseItem } from "./CourseItem";

export class Course_Subscription{
    _id: string = "";
    courseId: string = "";
    createUserId: string = "";
    progress: number = 0;
    isFinished: boolean = false;
    answers: number[] = [];
    grade: number = 0;
    
}