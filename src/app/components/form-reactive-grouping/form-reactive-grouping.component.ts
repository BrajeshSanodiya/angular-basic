import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive-grouping',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form-reactive-grouping.component.html',
  styleUrl: './form-reactive-grouping.component.css'
})
export class FormReactiveGroupingComponent {

  profileForm= new FormGroup({
    name: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(5)]),
    email: new FormControl('',[Validators.required, Validators.maxLength(30),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
  })

  get name(){
    return this.profileForm.get('name')
  }

  get password(){
    return this.profileForm.get('password')
  }

  get email(){
    return this.profileForm.get('email')
  }


  onSubmit(){
    console.log(this.profileForm.value);
  }

  onClear(){
    this.profileForm.setValue({
      name:"",
      password:"",
      email:""
    })
    }
   

  setValues(){
    this.profileForm.setValue({
      name:"brajesh",
      password:"12345",
      email:"abc@gmail.com"
    })
  }
}
