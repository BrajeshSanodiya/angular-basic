import { Component } from '@angular/core';
import { HeaderComponent } from "../routing-header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {

}
