import { Component } from '@angular/core';
import { Passdata2ChildcomponentComponent } from '../passdata2-childcomponent/passdata2-childcomponent.component';

@Component({
  selector: 'app-passdata2-parentcomponent',
  imports: [Passdata2ChildcomponentComponent],
  templateUrl: './passdata2-parentcomponent.component.html',
  styleUrl: './passdata2-parentcomponent.component.css',
})
export class Passdata2ParentcomponentComponent {
  users: undefined | string[];

  handleUser(user: string[]) {
    this.users = user;
  }
}
