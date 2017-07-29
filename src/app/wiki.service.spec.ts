import { async,TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing'
import { Injectable,ReflectiveInjector } from '@angular/core'

import { WikiService } from './wiki.service';
import { MockWikiService } from './mockwiki.service';
import { Jsonp, JsonpModule, ResponseOptions,XHRBackend } from '@angular/http';

describe('MockBackend: WikiService', () => {
  let mockbackend, service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: XHRBackend, useClass: MockBackend}, WikiService],
      imports: [JsonpModule]
    });
  });

  beforeEach(inject([WikiService, XHRBackend], (_service, _mockbackend) => {
    debugger;
    service = _service;
    mockbackend = _mockbackend;

  }));

  it('should be created', inject([WikiService], (service: WikiService) => {
    expect(service).toBeTruthy();
  }));
  
  it('should return json'), async(()=>{
    const wikiService: WikiService = TestBed.get(WikiService);
    wikiService.getData('Queen').subscribe(
      res => expect(res).not.toBeNull(),
      error => fail(error)
    );
  })
});

