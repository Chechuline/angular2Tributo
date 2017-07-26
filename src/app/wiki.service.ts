import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions } from '@angular/http';

@Injectable()
export class WikiService {
  private wikiUrl:string = 'https://es.wikipedia.org/w/api.php?action=parse&action=parse&format=json&prop=text&section=0&page=';
  constructor(private http:Http) { }

  getData(grupo){
     //TODO: cabeceras
    return this.http.get(`${this.wikiUrl}grupo`).map(res => res.json());
  }

  getHeaders(){
    let cabecera =  new Headers();
    cabecera.append("Access-Control-Allow-Origin", "*");

    // let options = new RequestOptions({ Headers: cabecera});
    // return options;

  }
}
