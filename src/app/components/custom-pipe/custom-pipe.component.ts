import { Component } from '@angular/core';
import { CurrencyConverterPipe } from '../../pipes/currency-converter.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-pipe',
  imports: [CommonModule, CurrencyConverterPipe],
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.css'
})
export class CustomPipeComponent {

  amount = 10
}
