import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlopyListComponent } from './slopy-list.component';

describe('SlopyListComponent', () => {
  let component: SlopyListComponent;
  let fixture: ComponentFixture<SlopyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlopyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlopyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
