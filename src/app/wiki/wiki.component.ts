import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {

  stringaDiRicerca: string;
  resultsList: [];

  constructor(private http: HttpClient) {  }

  getURL(termine) {
    return 'https://it.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=' + termine
  }

getLink(title) {
  return encodeURI("https://it.wikipedia.org/wiki/" + title)
}

  search() {
    // chiamata API wikipedia
    var url = this.getURL(this.stringaDiRicerca)
    this.http.get(url)  // chiamata asincrona
      .subscribe((response: any) => {
         //console.log(response)
        this.resultsList = response.query.search
      })
    // cercherà contenuto stringa di ricerca
    // dslverà il risultato in "resultsList"
  }

  ngOnInit() {
  }

}
