import { Component } from '@angular/core';
import { PassdataChildcomponentComponent } from "../passdata-childcomponent/passdata-childcomponent.component";

@Component({
  selector: 'app-passdata-parentcomponent',
  imports: [PassdataChildcomponentComponent],
  templateUrl: './passdata-parentcomponent.component.html',
  styleUrl: './passdata-parentcomponent.component.css'
})
export class PassdataParentcomponentComponent {
  username='brajesh'
  changeUser(val:string){
    this.username=val
  }
}
