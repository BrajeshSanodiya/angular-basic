import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './form-reactive.component.html',
  styleUrl: './form-reactive.component.css'
})
export class FormReactiveComponent {

  name=new FormControl()
  password=new FormControl()

  clearValue(){
    this.name.setValue("")
    this.password.setValue("")
  }

  setValues(){
    this.name.setValue("Brajesh")
    this.password.setValue("123456")
  }
}
