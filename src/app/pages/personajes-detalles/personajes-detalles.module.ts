import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesDetallesRoutingModule } from './personajes-detalles-routing.module';
import { PersonajesDetallesComponent } from './personajes-detalles.component';


@NgModule({
  declarations: [PersonajesDetallesComponent],
  imports: [
    CommonModule,
    PersonajesDetallesRoutingModule
  ]
})
export class PersonajesDetallesModule { }
