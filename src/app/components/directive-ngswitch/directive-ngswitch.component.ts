import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ngswitch',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './directive-ngswitch.component.html',
  styleUrl: './directive-ngswitch.component.css'
})
export class DirectiveNgswitchComponent {

  color='voilet'

  changeColor(color:string){
    this.color=color
  }
}
