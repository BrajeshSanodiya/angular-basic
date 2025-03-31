import { Component, effect, signal } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.css',
})
export class EffectComponent {
  count = signal(0);
  displayHeading = false;
  mColor = '#FFD433';
  constructor() {
    effect(() => {

      switch (this.count()) {
        case 1:
          this.displayHeading = true;
          this.mColor = '#FFD433';
          break;
        case 2:
          this.displayHeading = true;
          this.mColor = '#1985C3';
          break;
        case 3:
          this.displayHeading = true;
          this.mColor = '#3DD913';
          break;
        case 4:
          this.displayHeading = true;
          this.mColor = '#B0259B';
          break;
        default:
          this.displayHeading = false;
          this.mColor = '#FFD433';
          if(this.count()==7){
            this.count.set(0);
          }
          break;
      }

      if(this.displayHeading==true){
        setTimeout(()=>{
          this.displayHeading=false
        },2000)
      }
    });
  }

  changeVal() {
    this.count.set(this.count() + 1);
  }
}
