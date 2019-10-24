import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


import { AgmCoreModule } from '@agm/core';

import { ContentPagesRoutingModule } from "./content-pages-routing.module";
import { GoogleMapComponent } from './google-map/google-map.component';







@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule ,
        
        AgmCoreModule,
        
               
    ],
    declarations: [
         LoginComponent,
         GoogleMapComponent
        
    ]
})
export class ContentPagesModule { }
