import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss']
})
export class EpisodiosComponent implements OnInit {

  espisodios$ = this.dataSvc.episodes$;


  constructor( private dataSvc: DataService ) { }

  ngOnInit(): void {
  }

}
