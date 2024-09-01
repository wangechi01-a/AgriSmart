import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  selectedCategory: string = '';
  selectedDate: string = '';

  @Output() filter = new EventEmitter<{category: string, date: string}>();

  applyFilter(): void {
    this.filter.emit({ category: this.selectedCategory, date: this.selectedDate });
  }

}
