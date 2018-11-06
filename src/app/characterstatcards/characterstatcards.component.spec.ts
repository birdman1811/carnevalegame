import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterstatcardsComponent } from './characterstatcards.component';

describe('CharacterstatcardsComponent', () => {
  let component: CharacterstatcardsComponent;
  let fixture: ComponentFixture<CharacterstatcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterstatcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterstatcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
