import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GoogleMapComponent } from './google-map/google-map.component';




const routes: Routes = [
  {
    path: 'login',
     component: LoginComponent,
    data: {
      title: 'login'
    },    
  },
  {
    path: 'google-map',
    component: GoogleMapComponent,
    data: {
      title: 'Google Map'
    }
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentPagesRoutingModule { }
