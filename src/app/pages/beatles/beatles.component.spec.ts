import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatlesComponent } from './beatles.component';

describe('BeatlesComponent', () => {
  let component: BeatlesComponent;
  let fixture: ComponentFixture<BeatlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
