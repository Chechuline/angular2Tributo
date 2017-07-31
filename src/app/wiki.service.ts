import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Jsonp } from '@angular/http';

@Injectable()
export class WikiService {
  private wikiUrl: string = 'https://es.wikipedia.org/w/api.php?action=query&action=parse&format=json&prop=text&section=0&page=';
  constructor(private jsonp: Jsonp) { }

  getData(grupo) {
    return this.jsonp.get(`${this.wikiUrl}${grupo}&callback=JSONP_CALLBACK`).map(res => res.json());
  }
}
