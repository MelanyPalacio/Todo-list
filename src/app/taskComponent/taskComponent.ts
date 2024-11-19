import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskComponent.html',
  styleUrl: './taskComponent.css'
})
export class Task {  
  @Input() name = '';
  @Input() completed = false;
}