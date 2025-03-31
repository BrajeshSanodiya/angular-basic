import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template-driven',
  imports: [FormsModule, NgIf],
  templateUrl: './form-template-driven.component.html',
  styleUrl: './form-template-driven.component.css'
})
export class FormTemplateDrivenComponent {
  userDetails:any
  addDetails(val:NgForm){
    console.log(val);
    this.userDetails=val
    
  }

}
