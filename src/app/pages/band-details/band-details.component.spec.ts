import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core'

import { BandDetailsComponent } from './band-details.component';
import { WikiService } from '../../wiki.service';
describe('BandDetailsComponent', () => {
  let component: BandDetailsComponent;
  let fixture: ComponentFixture<BandDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BandDetailsComponent],
      providers: [WikiService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
