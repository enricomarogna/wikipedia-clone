import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {

  stringaDiRicerca: string;
  resultsList: [];

  constructor(private http: HttpClient, private router: ActivatedRoute) {  }

  getURL(termine) {
    let wiki: string;
    wiki = 'https://it.wikipedia.org/w/api.php?';
    wiki += 'action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=';
    return  wiki + termine;
  }

  getLink(title) {
    return encodeURI('https://it.wikipedia.org/wiki/' + title);
  }

  ngOnInit() {
    // this.router.params.subscribe(params => {
    //   this.stringaDiRicerca = params['stringaDiRicerca']
    //   if (this.stringaDiRicerca != '') {
    //     this.search()
    //   }
    // })

    this.router.params.subscribe(params => {
      const string = params['stringaDiRicerca']
        
        this.http.get(this.getURL(string))
        .subscribe((response: any) => {
          this.resultsList = response.query.search
        })
      
    })

  }

}
