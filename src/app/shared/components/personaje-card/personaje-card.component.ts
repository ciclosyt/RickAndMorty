import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Personajes } from '../../interfaces/data.interface';

@Component({
  selector: 'app-personaje-card',
  templateUrl: './personaje-card.component.html',
  styleUrls: ['./personaje-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonajeCardComponent implements OnInit {
  @Input() personaje: Personajes;

  constructor() { }

  ngOnInit(): void {
  }

  getIcon(): string {
    return this.personaje.isFavorite ? 'heart-solid.svg' : 'heart.svg';
  }

  toggleFav(){
    const isFav = this.personaje.isFavorite;

    this.getIcon();
    this.personaje.isFavorite = !isFav;


  }

}
