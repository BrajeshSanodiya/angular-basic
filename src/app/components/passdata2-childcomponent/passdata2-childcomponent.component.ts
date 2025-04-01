import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-passdata2-childcomponent',
  imports: [],
  templateUrl: './passdata2-childcomponent.component.html',
  styleUrl: './passdata2-childcomponent.component.css'
})
export class Passdata2ChildcomponentComponent {

  @Output() getUsers = new EventEmitter();

  users=["brajesh","braj","raj","Sano"]

  // ngOnInit(){
  //   this.getUsers.emit(this.users)
  // }

  updateUsers(user:string){
    this.users.push(user)
    this.getUsers.emit(this.users)
  }
}
