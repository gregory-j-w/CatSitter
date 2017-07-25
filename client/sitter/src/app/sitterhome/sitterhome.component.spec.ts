import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterhomeComponent } from './sitterhome.component';

describe('SitterhomeComponent', () => {
  let component: SitterhomeComponent;
  let fixture: ComponentFixture<SitterhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitterhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitterhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
