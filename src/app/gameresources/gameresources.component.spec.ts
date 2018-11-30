import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameresourcesComponent } from './gameresources.component';

describe('GameresourcesComponent', () => {
  let component: GameresourcesComponent;
  let fixture: ComponentFixture<GameresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
