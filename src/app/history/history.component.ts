import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  items = []

  constructor(private history: HistoryService) { 
    this.items = history.getHistory()
  }

  ngOnInit() {
  }

}
