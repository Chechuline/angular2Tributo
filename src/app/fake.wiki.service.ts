import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { Observable } from 'rxjs/Observable';
import { Response,ResponseOptions } from '@angular/http';

@Injectable()
export class FakeWikiService {

  private datos:any = {'*':'datos datos datos datos'}
  //private wikiUrl: string = 'https://es.wikipedia.org/w/api.php?action=query&action=parse&format=json&prop=text&section=0&page=';
  constructor() { }

  getData(grupo) {
    const resOpts:ResponseOptions = new ResponseOptions(this.datos);
    const resp:Response = new Response(resOpts);
    return Observable.of(resp);
   
  }
}
