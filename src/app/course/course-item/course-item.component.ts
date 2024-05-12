import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CourseItem } from '../../model/CourseItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css'
})
export class CourseItemComponent {

  @Input() item: CourseItem = new CourseItem();
  @Output() remove = new EventEmitter<void>();

  onRemove() {
    this.remove.emit();
  }

}
