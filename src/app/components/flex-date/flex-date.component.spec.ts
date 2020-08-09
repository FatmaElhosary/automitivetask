import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexDateComponent } from './flex-date.component';

describe('FlexDateComponent', () => {
  let component: FlexDateComponent;
  let fixture: ComponentFixture<FlexDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
