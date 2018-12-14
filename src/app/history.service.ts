import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  list = []

  constructor() { }

  // getHistory
  getHistory() {
    return this.list
  }

  // add Search
  addSearch(stringaDiRicerca) {
    this.list.push(stringaDiRicerca)
  }


}
