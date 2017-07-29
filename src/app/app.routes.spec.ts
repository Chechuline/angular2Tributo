import { async, TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing'
import { Router } from '@angular/router'
import { Location } from '@angular/common'
import { RouterTestingModule } from '@angular/router/testing'


import { routes } from './app.routes'
import { AppModule } from './app.module'
import { AppComponent } from './app.component'
describe('Router', () => {
  let router, location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule.withRoutes(routes)
      ]
    });
  });
  beforeEach(inject([Router, Location], (_router, _location) => {
    router = _router;
    location = _location;
  }));

  it('default route navigate to home ', (() => {
    let fixture = TestBed.createComponent(AppComponent);
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/');
    });
  }));
  it('non-existent route redirects to home ', (() => {
    let fixture = TestBed.createComponent(AppComponent);
    router.navigate(['/random']).then(() => {
      expect(location.path()).toBe('/');
    });
  }));

  it('default route navigate to Queen', (() => {
    let fixture = TestBed.createComponent(AppComponent);
    router.navigate(['/queen']).then(() => {
      expect(location.path()).toBe('/queen');
    });
  }));
  it('default route navigate to Rolling', (() => {
    let fixture = TestBed.createComponent(AppComponent);
    router.navigate(['/the-rolling-stones']).then(() => {
      expect(location.path()).toBe('/the-rolling-stones');
    });
  }));
  it('default route navigate to Beatles', (() => {
    let fixture = TestBed.createComponent(AppComponent);
    router.navigate(['/the-beatles']).then(() => {
      expect(location.path()).toBe('/the-beatles');
    });
  }));
  it('default route navigate to Queen', (() => {
    let fixture = TestBed.createComponent(AppComponent);
    router.navigate(['/foo']).then(() => {
      debugger;
      expect(location.path()).toBe('/foo');
    });
  }));
  it('default route navigate to Bar', (() => { 
    let fixture = TestBed.createComponent(AppComponent);
    router.navigate(['/bar']).then(() => {
      debugger;
      expect(location.path()).toBe('/bar');
    });
  }));

});
