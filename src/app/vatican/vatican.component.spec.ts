import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaticanComponent } from './vatican.component';

describe('VaticanComponent', () => {
  let component: VaticanComponent;
  let fixture: ComponentFixture<VaticanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaticanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaticanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
