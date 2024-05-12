import { CourseItem } from "./CourseItem";
import { QuizItem } from "./QuizItem";

export class Course{
    _id: string = "";
    code: string = "";
    name: string = "";
    description: string = "";
    items: CourseItem[] = [];
    quizItems: QuizItem[] = [];
    createUserId: string = "";
}