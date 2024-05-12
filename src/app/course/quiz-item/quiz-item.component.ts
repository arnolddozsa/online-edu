import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuizItem } from '../../model/QuizItem';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './quiz-item.component.html',
  styleUrl: './quiz-item.component.css'
})
export class QuizItemComponent {

  @Input() item: QuizItem = new QuizItem();
  @Input() qIndex: number = 0;
  @Output() remove = new EventEmitter<void>();

  onRemove() {
    this.remove.emit();
  }

  addAnswer(){
    this.item.answers.push("");
  }

  deleteAnswer(i: number){
    this.item.answers.splice(i, 1);
  }

  
  updateItem(index: number, ev: Event) {
    const target = ev.target as HTMLInputElement;
    this.item.answers[index] = target.value;
  }

  markCorrect(index: number, ev: Event) {
    this.item.correctAnswer = index;
  }

}
