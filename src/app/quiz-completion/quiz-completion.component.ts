import { Component } from '@angular/core';
import { Course } from '../model/Course';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../services/server.service';
import { QuizItem } from '../model/QuizItem';
import { CommonModule } from '@angular/common';
import { Course_Subscription } from '../model/Course_Subscription';

@Component({
  selector: 'app-quiz-completion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-completion.component.html',
  styleUrl: './quiz-completion.component.css'
})
export class QuizCompletionComponent {

  course?: Course;
  subscription?: Course_Subscription;
  page: number = 0;
  itemCount: number = 0;
  quizItem?: QuizItem;

  constructor(private route: ActivatedRoute, private router: Router, private service: ServerService) {

  }

  async ngOnInit(): Promise<void> {
    // const id = this.route.snapshot.paramMap.get('id');
    // console.log('ID from URL:', id);

    // console.log(this.route.snapshot);
    this.route.paramMap.subscribe(async params => {
      const code = params.get('code');
      this.page = Number(params.get('page'));

      try {
        var { course, subscription } = await this.service.getSubscribed(code);
        this.course = course;
        this.subscription = subscription;
        console.log(this.subscription);
        this.itemCount = this.course?.quizItems.length || 0;
        this.quizItem = this.course?.quizItems[this.page - 1]
        // this.service.progress(this.page);
      } catch (error) {
        this.router.navigateByUrl("/course/list");
      }
    });
  }

  async prev() {
    if (this.page > 1) {
      this.page--;
      this.router.navigateByUrl(`/course/quiz/${this.course?.code}/${this.page}`);
    }
  }
  async next() {
    try {
      await this.service.updateSubscription(this.subscription);
      if (this.page < (this.itemCount || 0)) {
        this.page++;
        this.router.navigateByUrl(`/course/quiz/${this.course?.code}/${this.page}`);

      }
    } catch (error) {

    }


  }

  async answer(index: number) {
    if (this.subscription) {
      if (!this.subscription.answers) {
        this.subscription.answers = [];
      } 
      this.subscription.answers[this.page-1] = index;
    }
  }

  async finishCourse() {
    try {
      await this.service.updateSubscription(this.subscription);
      await this.service.finishCourse(this.course?.code);
      this.router.navigateByUrl(`/course/list`)
    } catch (error) {

    }
  }

}