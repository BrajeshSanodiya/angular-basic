import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Users } from '../../interfaces/Users';

@Component({
  selector: 'app-service-user',
  imports: [],
  templateUrl: './service-user.component.html',
  styleUrl: './service-user.component.css',
})
export class ServiceUserComponent {
  userList: Users[] = [];

  constructor(private userServices: UserService) {}

  ngOnInit() {
    this.userServices.getUserList().subscribe((users: Users[]) => {
      this.userList = users;
      console.log(users);
    });
  }
}
