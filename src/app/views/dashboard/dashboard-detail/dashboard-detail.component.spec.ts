
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDetailComponent } from './dashboard-detail.component';

describe('DashboardDetailComponent', () => {
  let component: DashboardDetailComponent;
  let fixture: ComponentFixture<DashboardDetailComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
