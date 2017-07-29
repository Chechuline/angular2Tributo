import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { Observable } from 'rxjs/Observable';
import { Jsonp } from '@angular/http';

@Injectable()
export class MockWikiService {
  protected _subscription: Subscription;
  protected _fakeContent: any;
  protected _fakeError: any;

  set error(err) {
    this._fakeError = err;
  }

  set content(data) {
    this._fakeContent = data;
  }

  get subscription(): Subscription {
    return this._subscription;
  }
  subscribe(next: Function, error?: Function, complete?: Function): Subscription {
    this._subscription = new Subscription();
    spyOn(this._subscription, 'unsubscribe');

    if (next && this._fakeContent && !this._fakeError) {
      next(this._fakeContent);
    }
    if (error && this._fakeError) {
      error(this._fakeError);
    }
    if (complete) {
      complete();
    }
    return this._subscription;
  }

  private wikiUrl: string = 'https://es.wikipedia.org/w/api.php?action=query&action=parse&format=json&prop=text&section=0&page=';
  constructor(private jsonp: Jsonp) { }

  getData(grupo) {
    console.info(`${this.wikiUrl}${grupo}&callback=JSONP_CALLBACK`);
    return this.jsonp.get(`${this.wikiUrl}${grupo}&callback=JSONP_CALLBACK`).map(res => res.json());
  }
}
