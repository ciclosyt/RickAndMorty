/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Personajes, Episodios, DataResponse } from '../interfaces/data.interface';

const QUERY = gql `

 {
  episodes {
    results {
      name
      episode
    }
  }

  characters {
    results {
      id
      name
      status
      species
      gender
      image

    }
  }
 
}
`;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private episodeSubject = new BehaviorSubject<Episodios[]>(null);
  episodes$ = this.episodeSubject.asObservable();

  private personajesSubject = new BehaviorSubject<Personajes[]>(null);
  personajes$ = this.personajesSubject.asObservable();


  constructor( private apollo: Apollo ) {

    this.getData();

   }

  private getData(): void {

    this.apollo.watchQuery<DataResponse>({
      query: QUERY
    }).valueChanges.pipe(
      take(1),
      tap(({data}) => {
        const { characters, episodes } = data;
        this.episodeSubject.next(episodes.results);
        this.personajesSubject.next(characters.results);
      } ) ).subscribe();

  }

}
