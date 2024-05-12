import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { Course } from '../model/Course';
import { CommonModule } from '@angular/common';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { User } from '../model/User';

@Component({
  selector: 'app-list-course',
  standalone: true,
  imports: [CommonModule, CourseListItemComponent],
  templateUrl: './list-course.component.html',
  styleUrl: './list-course.component.css'
})
export class ListCourseComponent implements OnInit{

  courses: Course[] = [];
  user: User = new User();

  constructor(private service: ServerService){
    this.user = service.user;
  }

  async ngOnInit(): Promise<void> {
    this.user = this.service.user;
    this.courses = await this.service.listCourse();
    console.log(this.courses, this.user);
  }

  async refresh(course: Course){
    this.courses = await this.service.listCourse();
  }

}
