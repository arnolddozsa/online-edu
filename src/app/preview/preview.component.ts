import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../services/server.service';
import { Course } from '../model/Course';
import { CourseItem } from '../model/CourseItem';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent implements OnInit{

  course? : Course;
  item? : CourseItem;

  constructor(private route: ActivatedRoute, private service: ServerService, private router : Router){

  }

  async ngOnInit(): Promise<void> {
    
    this.route.paramMap.subscribe(async params => {
      const code = params.get('code');
      
      try {
        this.course = await this.service.getCourse(code);
        
        //for first page
        this.item = this.course?.items[0];
        
      } catch (error) {
        this.router.navigateByUrl("/course/list");
      }
    });
  }
}
