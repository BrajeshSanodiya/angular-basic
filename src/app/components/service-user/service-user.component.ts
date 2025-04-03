import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Users } from '../../interfaces/Users';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-user',
  imports: [FormsModule],
  templateUrl: './service-user.component.html',
  styleUrl: './service-user.component.css',
})
export class ServiceUserComponent {
  userList: Users[] = [];
  selectedUser: Users|undefined;

  constructor(private userServices: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.userServices.getUserList().subscribe((users: Users[]) => {
      this.userList = users;
    });
  }

  formSubmit(user:Users){
    if(this.selectedUser){
      user.id=this.selectedUser.id
      this.updateUser(user)
    }else{
      this.addUser(user)
    }
    this.selectedUser=undefined;
  }
  addUser(user:Users){  
      this.userServices.addUser(user).subscribe((user:Users)=>{
        if(user){
          this.getUser();
        }
      })
  }

  deleteUser(id:string){
    this.userServices.deleteUser(id).subscribe((user:Users)=>{
      if(user){
        
        this.getUser();
      }
    })
  }

  selectUser(id:string){
    this.userServices.selectUser(id).subscribe((user:Users)=>{
      if(user){
        this.selectedUser=user;
      }
    })
  }

  updateUser(user:Users){
    this.userServices.updateUser(user).subscribe((user:Users)=>{
      if(user){
        this.getUser();
      }
    })
  }

}
