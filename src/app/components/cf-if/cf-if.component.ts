import { Component } from '@angular/core';

@Component({
  selector: 'app-cf-if',
  imports: [],
  templateUrl: './cf-if.component.html',
  styleUrl: './cf-if.component.css'
})
export class CfIfComponent {
  display=true

  toggle(){
    this.display=!this.display
  }

  color=1

  handleColor(val:number){
      this.color=val;
  }
  handleInput(event:Event){
   this.color= parseInt((event.target as HTMLInputElement).value)
  }
}
