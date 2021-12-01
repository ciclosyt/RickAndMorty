import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PersonajeCardComponent } from './components/personaje-card/personaje-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, PersonajeCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    PersonajeCardComponent
  ]
})
export class SharedModule { }
