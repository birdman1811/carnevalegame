import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrigoiComponent } from './strigoi.component';

describe('StrigoiComponent', () => {
  let component: StrigoiComponent;
  let fixture: ComponentFixture<StrigoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrigoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrigoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
