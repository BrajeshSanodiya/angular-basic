import { afterNextRender, afterRender, Component, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';
import { LifecycleMethodsUserComponent } from "../lifecycle-methods-user/lifecycle-methods-user.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-lifecycle-methods',
  imports: [LifecycleMethodsUserComponent, NgIf],
  templateUrl: './lifecycle-methods.component.html',
  styleUrl: './lifecycle-methods.component.css'
})
export class LifecycleMethodsComponent {
  @ViewChild('userComp') LifecycleMethodsUserComponent:any;
  count=0;

  constructor(){
    afterRender(()=>{
       console.log('LifecycleMethods - afterRender');
    })
    afterNextRender(()=>{
      console.log('LifecycleMethods - afterNextRender');
    })
  }

  updateCounter(){
    this.count++;
  }

}
