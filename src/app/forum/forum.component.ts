import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/Course';
import { Forum } from '../model/Forum';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})
export class ForumComponent implements OnInit{

  course?: Course;
  forum : Forum[] = [];
  message: string = "";

  constructor(private route: ActivatedRoute,  private service: ServerService){}
  
  async ngOnInit(): Promise<void> {
    // this.course.name =  "asd";
    // this.course.items.push(new CourseItem())

    this.route.paramMap.subscribe(async params => {
      const code = params.get('code');

      if(code?.length){

        try {
          var {course, forum} = await this.service.getForum(code);
          this.course = course;
          this.forum = forum;
        } catch (error) {
          //this.router.navigateByUrl("/course/list")
        }
      }
      
    });

  }
  
  async sendMessage(){
    try {
      if(this.message.length > 0){

        this.forum = await this.service.sendForumMessage(this.course?.code || "", this.message);
        this.message = "";
      }
    } catch (error) {
      
    }
  }

}
