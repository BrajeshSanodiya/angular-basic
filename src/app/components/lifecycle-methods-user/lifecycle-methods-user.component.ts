import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lifecycle-methods-user',
  imports: [],
  templateUrl: './lifecycle-methods-user.component.html',
  styleUrl: './lifecycle-methods-user.component.css'
})
export class LifecycleMethodsUserComponent {

  @Input() counter=0
  user="braj"
  constructor(){
    console.log('LifecycleMethodsUser - constructor');
    this.user="Raj"
  }

  ngOnInit(){
    console.log('LifecycleMethodsUser - ngOnInit');
    this.user="Brajesh"
  }
  
  ngOnChanges(){
    console.log('LifecycleMethodsUser - ngOnChange');
  }

  ngOnDestroy(){
    console.log('LifecycleMethodsUser - ngOnDestroy');
  }


}
