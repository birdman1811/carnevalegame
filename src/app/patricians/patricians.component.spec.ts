import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatriciansComponent } from './patricians.component';

describe('PatriciansComponent', () => {
  let component: PatriciansComponent;
  let fixture: ComponentFixture<PatriciansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatriciansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatriciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
