import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingSiteComponent } from './programming-site.component';

describe('ProgrammingSiteComponent', () => {
  let component: ProgrammingSiteComponent;
  let fixture: ComponentFixture<ProgrammingSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
