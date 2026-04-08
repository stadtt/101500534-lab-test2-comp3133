import { ComponentFixture, TestBed } from '@angular/core/testing';

import { characterListComponent } from './characterList..component';

describe('characterListComponent', () => {
  let component: characterListComponent;
  let fixture: ComponentFixture<characterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [characterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(characterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
