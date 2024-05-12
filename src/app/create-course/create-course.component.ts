import { Component, OnInit } from '@angular/core';
import { Course } from '../model/Course';
import { ServerService } from '../services/server.service';
import { FormsModule } from '@angular/forms';
import { CourseItemComponent } from '../course/course-item/course-item.component';
import { CourseItem } from '../model/CourseItem';
import { CommonModule } from '@angular/common';
import { QuizItem } from '../model/QuizItem';
import { QuizItemComponent } from '../course/quiz-item/quiz-item.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [FormsModule, CourseItemComponent
    , QuizItemComponent
    , CommonModule],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})

export class CreateCourseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private service: ServerService){}

  course: Course = new Course();
  error: string = "";

  async ngOnInit(): Promise<void> {
      // this.course.name =  "asd";
      // this.course.items.push(new CourseItem())

      this.route.paramMap.subscribe(async params => {
        const code = params.get('code');

        if(code?.length){

          try {
            this.course = await this.service.getTeachersCourse(code);
          } catch (error) {
            //this.router.navigateByUrl("/course/list")
          }
        }
        
      });
  }

  async CreateCourse(){
    try {
      if(this.course.code.length > 0){

        await this.service.updateCourse(this.course);
      } else {
        await this.service.createCourse(this.course);

      }
    } catch (error: any) {
      this.error = error.message;
    }
  }

  async AddItem(){
    this.course.items.push(new CourseItem());
    
  }

  async AddQuizItem(){
    this.course.quizItems.push(new QuizItem());
    
    
  }
}
