import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  id=0
  name=""
  age=0
  email=""

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.id=params['id']
      this.name=params['name']
      this.age=params['age']
      this.email=params['email']
    })
  }
}
