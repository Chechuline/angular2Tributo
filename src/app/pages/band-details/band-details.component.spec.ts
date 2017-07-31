import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing';

import { BandDetailsComponent } from './band-details.component';
import { WikiService } from '../../wiki.service';
import { Jsonp, JsonpModule, ResponseOptions,XHRBackend } from '@angular/http';
describe('BandDetailsComponent', () => {
  let component: BandDetailsComponent;
  let fixture: ComponentFixture<BandDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BandDetailsComponent],
      providers: [WikiService],
      imports: [JsonpModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(BandDetailsComponent);
    component = fixture.componentInstance;
    //.compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(BandDetailsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
