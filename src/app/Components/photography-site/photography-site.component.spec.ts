import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographySiteComponent } from './photography-site.component';

describe('PhotographySiteComponent', () => {
  let component: PhotographySiteComponent;
  let fixture: ComponentFixture<PhotographySiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographySiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographySiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
