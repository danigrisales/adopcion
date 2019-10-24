import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { VideoComponent } from './video/video.component';
import { CarouselComponent } from './carousel/carousel.component';
import { EditorComponent } from './editor/editor.component';
import { EscaficionadoComponent } from './escaficionado/escaficionado.component';
import { EscprofesionalComponent } from './escprofesional/escprofesional.component';
import { GruposComponent } from './grupos/grupos.component';
import { HorariosComponent } from './horarios/horarios.component';
import { MilongaComponent } from './milonga/milonga.component';
import { PaficionadoComponent } from './paficionado/paficionado.component';
import { PprofesionalComponent } from './pprofesional/pprofesional.component';
import { PremiacionComponent } from './premiacion/premiacion.component';




const routes: Routes = [
  {
    path: '',    
    children: [
      {
        path: 'carousel',
        component: CarouselComponent,
        data: {
          title: 'Carousel'
        }
      }, {
        path: 'video',
        component: VideoComponent,
        data: {
          title: 'Video '
        }
      }, 
      {
        path: 'editor',
        component: EditorComponent,
        data: {
          title: 'Editor '
        }
        }, {
          path: 'escaficionado',
          component: EscaficionadoComponent,
          data: {
            title: 'escaficionado '
          }
        },
        {
          path: 'escprofesional',
          component: EscprofesionalComponent,
          data: {
            title: 'escprofesional '
          }
        },
        {
          path: 'grupos',
          component: GruposComponent,
          data: {
            title: 'grupos '
          }
        },
        {
          path: 'horarios',
          component: HorariosComponent,
          data: {
            title: 'horarios '
          }
        },
        {
          path: 'milonga',
          component: MilongaComponent,
          data: {
            title: 'milonga '
          }
        },
        {
          path: 'paficionado',
          component: PaficionadoComponent,
          data: {
            title: 'padicionado '
          }
        },
        {
          path: 'pprofesional',
          component: PprofesionalComponent,
          data: {
            title: 'pprofesional '
          }
        }, {
          path: 'premiacion',
          component: PremiacionComponent,
          data: {
            title: 'premiacion '
          }
        },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule { }