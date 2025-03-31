import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ngif',
  imports: [NgIf],
  templateUrl: './directive-ngif.component.html',
  styleUrl: './directive-ngif.component.css'
})
export class DirectiveNgifComponent {
 login=true;

 block=2;

 updateBlock(){
  this.block++
  if(this.block==4)
    this.block=1
 }
}
