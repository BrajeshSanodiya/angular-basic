import { Component } from '@angular/core';
import { CfSwitchComponent } from "./components/cf-switch/cf-switch.component";
import { CfForComponent } from "./components/cf-for/cf-for.component";
import { SignalComponent } from "./components/signal/signal.component";
import { EffectComponent } from "./components/effect/effect.component";
import { CfForCvComponent } from "./components/cf-for-cv/cf-for-cv.component";
import { DirectiveNgforComponent } from "./components/directive-ngfor/directive-ngfor.component";
import { DirectiveNgifComponent } from "./components/directive-ngif/directive-ngif.component";
import { CfIfComponent } from "./components/cf-if/cf-if.component";
import { DirectiveNgswitchComponent } from "./components/directive-ngswitch/directive-ngswitch.component";
import { HomeComponent } from "./components/routing-home/home.component";
import { DashbordComponent } from "./components/routing-dashbord/dashbord.component";
import { FormReactiveComponent } from "./components/form-reactive/form-reactive.component";
import { FormReactiveGroupingComponent } from "./components/form-reactive-grouping/form-reactive-grouping.component";

@Component({
  selector: 'app-root',
  imports: [CfSwitchComponent, CfForComponent, SignalComponent, EffectComponent, CfForCvComponent, DirectiveNgforComponent, DirectiveNgifComponent, CfIfComponent, DirectiveNgswitchComponent, DashbordComponent, FormReactiveComponent, FormReactiveGroupingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic';
}
