import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { VideoComponent } from './video/video.component';
import { EditorComponent } from './editor/editor.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PaficionadoComponent } from './paficionado/paficionado.component';
import { PprofesionalComponent } from './pprofesional/pprofesional.component';
import { EscaficionadoComponent } from './escaficionado/escaficionado.component';
import { EscprofesionalComponent } from './escprofesional/escprofesional.component';
import { MilongaComponent } from './milonga/milonga.component';
import { GruposComponent } from './grupos/grupos.component';
import { HorariosComponent } from './horarios/horarios.component';
import { PremiacionComponent } from './premiacion/premiacion.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';


import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CarouselComponent, VideoComponent, EditorComponent, PaficionadoComponent, PprofesionalComponent, EscaficionadoComponent, EscprofesionalComponent, MilongaComponent, GruposComponent, HorariosComponent, PremiacionComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NgbModule,
    VgCoreModule,
    ReactiveFormsModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule,
    QuillModule
  ]
})
export class ComponentsModule { }
