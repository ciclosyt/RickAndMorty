import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [PersonajesComponent],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    SharedModule
  ]
})
export class PersonajesModule { }
