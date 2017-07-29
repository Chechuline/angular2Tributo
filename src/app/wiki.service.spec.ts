import { async,TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing'
import { Injectable,ReflectiveInjector } from '@angular/core'

import { WikiService } from './wiki.service';
import { FakeWikiService } from './fake.wiki.service';
import { Jsonp, JsonpModule, ResponseOptions,XHRBackend } from '@angular/http';

describe('MockBackend: WikiService', () => {
  let mockbackend, service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: WikiService, useClass: FakeWikiService}, WikiService],
      imports: [JsonpModule]
    });
  });

  beforeEach(inject([WikiService], (_service) => {
    service = _service;
  }));

  it('should be created', inject([WikiService], (service: WikiService) => {
    expect(service).toBeTruthy();
  }));
  
  it('should return json', ()=>{
    debugger;
    const wikiService: WikiService = TestBed.get(WikiService);

    wikiService.getData('Queen').subscribe(
      res => {debugger; expect(res).not.toBeNull()},
      error => {debugger; fail(error)}
    );
  })
});

