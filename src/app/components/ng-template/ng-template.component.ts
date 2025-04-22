import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  imports: [NgTemplateOutlet,NgIf],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {
haveData=true

swithData(){ 
  this.haveData=!this.haveData
}
}
