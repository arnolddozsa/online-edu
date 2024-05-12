import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../model/Course';
import { ServerService } from '../services/server.service';
import { CourseItem } from '../model/CourseItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-read-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-course.component.html',
  styleUrl: './read-course.component.css'
})
export class ReadCourseComponent implements OnInit{

  course?: Course;
  page: number = 0;
  itemCount: number = 0;
  item?: CourseItem;

  constructor(private route: ActivatedRoute, private router: Router, private service:ServerService){

  }

async ngOnInit(): Promise<void> {
  // const id = this.route.snapshot.paramMap.get('id');
  // console.log('ID from URL:', id);

  this.route.paramMap.subscribe(async params => {
    const code = params.get('code');
    this.page = Number(params.get('page'));
    
    try {
      var { course, subscription } = await this.service.getSubscribed(code);
      this.course = course;
      this.itemCount = this.course?.items.length || 0;
      this.item = this.course?.items[this.page-1]
      // this.service.progress(this.page);
    } catch (error) {
      this.router.navigateByUrl("/course/list");
    }
  });
}

async prev(){
  if(this.page > 1){
    this.page--;
    this.router.navigateByUrl(`/course/read/${this.course?.code}/${this.page}`);
  }
}
async next(){
  try {
    await this.service.progress(this.course?.code, this.page);
    if(this.page < (this.itemCount|| 0)){
      this.page++;
      this.router.navigateByUrl(`/course/read/${this.course?.code}/${this.page}`);
      
    }
  } catch (error) {
    
  }
 

}

async quizStart(){
  try {
    await this.service.progress(this.course?.code, this.page);
    this.router.navigateByUrl(`/course/quiz/${this.course?.code}/1`)
  } catch (error) {
    
  }
}

async finishCourse(){
  try {
    await this.service.progress(this.course?.code, this.page);
    await this.service.finishCourse(this.course?.code);
    this.router.navigateByUrl(`/course/list`)
  } catch (error) {
    
  }
}

}
