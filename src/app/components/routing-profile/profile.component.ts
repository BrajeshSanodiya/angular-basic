import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private route:ActivatedRoute){}

  userName1:string|null="";
  userName2:string="";
  userName3:string="";
  ngOnInit():void{
    this.userName1= this.route.snapshot.paramMap.get('name');
   

    this.route.queryParams.subscribe(params=>{
      this.userName2=params['name']
    })

    this.route.data.subscribe(data=>{
      this.userName3=data['name']
    })
  }

}
