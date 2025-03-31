import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  count = signal(10)

  // datatype
  //data = signal<number|string>(10)
  //data: WritableSignal<number|string> = signal<number|string>(10)
  data: WritableSignal<number|string> = signal(10)
  //data: WritableSignal<number> = signal(10)  // if want to udapte() val using val+1
  readCount: Signal<number> = computed(()=>10); // readable
  updateData(){
   //this.data.set('Hello')
   this.data.update((val)=>20)
   //this.data.update((val)=>val+1)
  }


  // computed signal
  x=signal(10)
  y=signal(30)
  z= computed(()=>this.x()+this.y())

  updateX(){
    this.x.set(this.x()+20)
  }

}
