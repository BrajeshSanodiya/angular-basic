import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-perdefine-pipe',
  imports: [CommonModule],
  templateUrl: './perdefine-pipe.component.html',
  styleUrl: './perdefine-pipe.component.css'
})
export class PerdefinePipeComponent {

  title = "Learn angular step by step"
  date=new Date()

  amount=10
}
