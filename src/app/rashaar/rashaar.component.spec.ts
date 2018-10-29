import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RashaarComponent } from './rashaar.component';

describe('RashaarComponent', () => {
  let component: RashaarComponent;
  let fixture: ComponentFixture<RashaarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RashaarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RashaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
