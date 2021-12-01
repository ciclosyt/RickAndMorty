import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  personajes$ = this.dataSvc.personajes$;

  constructor( private dataSvc: DataService,
                private localStorageSvc: LocalStorageService ) { }

  

  ngOnInit(): void {
  }

}
