import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TVSeriesComponent } from './tv-series.component';

describe('TVSeriesComponent', () => {
  let component: TVSeriesComponent;
  let fixture: ComponentFixture<TVSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TVSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TVSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
