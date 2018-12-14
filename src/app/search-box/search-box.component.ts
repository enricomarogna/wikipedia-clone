import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  stringaDiRicerca: ""

  constructor(private router: Router, private history: HistoryService) { }

  search() {
    // navigazione verso /results/:stringaDiRicerca
    this.router.navigate(['results', this.stringaDiRicerca])
    this.history.addSearch(this.stringaDiRicerca)
  }

  ngOnInit() {
  }

}
