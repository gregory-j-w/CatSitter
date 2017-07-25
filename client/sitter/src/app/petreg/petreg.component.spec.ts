import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetregComponent } from './petreg.component';

describe('PetregComponent', () => {
  let component: PetregComponent;
  let fixture: ComponentFixture<PetregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
