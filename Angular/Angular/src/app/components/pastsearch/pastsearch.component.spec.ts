import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastsearchComponent } from './pastsearch.component';

describe('PastsearchComponent', () => {
  let component: PastsearchComponent;
  let fixture: ComponentFixture<PastsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
