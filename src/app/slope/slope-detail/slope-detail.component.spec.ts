import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlopeDetailComponent } from './slope-detail.component';

describe('SlopeDetailComponent', () => {
  let component: SlopeDetailComponent;
  let fixture: ComponentFixture<SlopeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlopeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlopeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
