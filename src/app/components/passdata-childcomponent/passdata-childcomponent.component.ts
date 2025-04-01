import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-passdata-childcomponent',
  imports: [],
  templateUrl: './passdata-childcomponent.component.html',
  styleUrl: './passdata-childcomponent.component.css'
})
export class PassdataChildcomponentComponent {
 @Input() user:string=''
 @Input() city:string=''

}
