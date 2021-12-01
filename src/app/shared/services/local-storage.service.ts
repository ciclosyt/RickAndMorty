/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Personajes } from '../interfaces/data.interface';

const MY_FAVORITE = 'myFavorites';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private personajesFavSubject = new BehaviorSubject<Personajes[]>(null);
  personajesFav$ = this.personajesFavSubject.asObservable();

  constructor() { 
    this.iniciarStorage();
  }

  addOrRemoveFav(): void {
    
  }

  private addFav(): void {

  }

  private removeFromFav(): void {

  }


  getFavoritesPersonajes(): any {

    try {
      const personajesFav = JSON.parse(localStorage.getItem(MY_FAVORITE));
      this.personajesFavSubject.next(personajesFav);

      return personajesFav;
      
    } catch (error) {
      console.log('error obtener del storage', error);
      
      
    }

  }

  limpiarStorage(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.log('error limpiando el local storage', error);
      
      
    }
  }

  
  private iniciarStorage(): void {
    const currents = JSON.parse(localStorage.getItem(MY_FAVORITE));

    if( !currents ){
      localStorage.setItem(MY_FAVORITE, JSON.stringify([]));
    }

    this.getFavoritesPersonajes();
  }

  


}
