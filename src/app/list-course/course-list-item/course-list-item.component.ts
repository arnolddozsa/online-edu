import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../model/Course';
import { ServerService } from '../../services/server.service';
import { User } from '../../model/User';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Course_Subscription } from '../../model/Course_Subscription';

@Component({
  selector: 'app-course-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list-item.component.html',
  styleUrl: './course-list-item.component.css'
})
export class CourseListItemComponent implements OnInit{
  @Input() course: Course = new Course();
  @Output() remove = new EventEmitter<Course>();

  subscription? : Course_Subscription;
  progress: number = 0;

  user: User = new User();

  constructor(private router: Router, private service: ServerService) {
    this.user = service.user;
  }

  async ngOnInit(): Promise<void> {
    try {
      
      var {course, subscription} = await this.service.getSubscribed(this.course.code);
      this.subscription = subscription;
      this.progress = (this.subscription?.progress ?? 0) * 100
      this.progress /= course.items.length ;

      console.log(this.subscription);
    } catch (error) {
      
    } 
  }

  async onDelete() {

    try {
      await this.service.deleteCourse(this.course._id);
      this.remove.emit(this.course);

    } catch (error) {

    }
  }
  async edit() {

    this.router.navigateByUrl(`/course/update/${this.course?.code}`);
  }

  async subscribe() {
    try {
      await this.service.subscribe(this.course.code);
      this.remove.emit();
    } catch (error) {

    }

  }
  async read() {
    try {
      this. router.navigateByUrl(`/course/read/${this.course?.code}/${(this.subscription?.progress ?? 0) + 1 || 1}`);
    } catch (error) {

    }

  }

  async forum(){
    this.router.navigateByUrl(`/course/forum/${this.course?.code}`)
  }
}
