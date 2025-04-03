import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/routing-login/login.component';
import { ContactComponent } from './components/routing-contact/contact.component';
import { HomeComponent } from './components/routing-home/home.component';
import { PageNotFoundComponent } from './components/routing-page-not-found/page-not-found.component';
import { ProfileComponent } from './components/routing-profile/profile.component';
import { UserComponent } from './components/routing-user/user.component';

export const routes: Routes = [
    {path:'about', component:AboutComponent},
    {path:'login', component:LoginComponent},
    {path:'contact', component:ContactComponent},
    {path:'profile', component:ProfileComponent, data:{name:"Braj Sano"}},
    {path:'user/:id/:name/:email/:age', component:UserComponent},
    {path:'admin', loadComponent:()=>import('./components/routing-lazy-admin/routing-lazy-admin.component').then((c)=>c.RoutingLazyAdminComponent)},
    {path:'', component:HomeComponent},
    {path:'**', component:PageNotFoundComponent}
    
];
