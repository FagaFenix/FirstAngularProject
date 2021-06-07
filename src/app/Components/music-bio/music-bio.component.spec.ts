import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicBioComponent } from './music-bio.component';

describe('MusicBioComponent', () => {
  let component: MusicBioComponent;
  let fixture: ComponentFixture<MusicBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
