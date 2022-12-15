import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSlopeComponent } from './new-slope.component';

describe('NewSlopeComponent', () => {
  let component: NewSlopeComponent;
  let fixture: ComponentFixture<NewSlopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSlopeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSlopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
