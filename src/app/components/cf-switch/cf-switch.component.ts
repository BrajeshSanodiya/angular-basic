import { Component } from '@angular/core';

@Component({
  selector: 'app-cf-switch',
  imports: [],
  templateUrl: './cf-switch.component.html',
  styleUrl: './cf-switch.component.css'
})
export class CfSwitchComponent {
  color='red';
  handleColor(val:string){
    this.color=val;
}
handleInput(event:Event){
  this.color= (event.target as HTMLInputElement).value
}
}
