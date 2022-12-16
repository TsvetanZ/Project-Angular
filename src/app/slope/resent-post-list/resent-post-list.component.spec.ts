import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResentPostListComponent } from './resent-post-list.component';

describe('ResentPostListComponent', () => {
  let component: ResentPostListComponent;
  let fixture: ComponentFixture<ResentPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResentPostListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResentPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
