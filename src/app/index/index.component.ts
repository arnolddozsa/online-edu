import { Component } from '@angular/core';
import { Course } from '../model/Course';
import { User } from '../model/User';
import { ServerService } from '../services/server.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  courses: Course[] = [];
  user: User = new User();

  constructor(private service: ServerService){
    this.user = service.user;
    console.log(this.service.user);
  }

  getUser(){
    
    return this.service.user;
    
  }

  async ngOnInit(): Promise<void> {
    this.user = this.service.user;
    this.courses = await this.service.listCourse();
  }

  async refresh(course: Course){
    this.courses = await this.service.listCourse();
  }

}
