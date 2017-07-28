import { async,TestBed, inject } from '@angular/core/testing';

import { WikiService } from './wiki.service';

describe('WikiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WikiService]
    });
  });

  it('should be created', inject([WikiService], (service: WikiService) => {
    expect(service).toBeTruthy();
  }));
  
  it('should return json'), async(()=>{
    const wikiService: WikiService = TestBed.get(WikiService);
    wikiService.getData('band').subscribe(
      res => expect(res).not.toBeNull(),
      error => fail(error)
    );
  })
});
