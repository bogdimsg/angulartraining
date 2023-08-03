import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadRouteComponent } from './bad-route.component';

describe('BadRouteComponent', () => {
  let component: BadRouteComponent;
  let fixture: ComponentFixture<BadRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadRouteComponent]
    });
    fixture = TestBed.createComponent(BadRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
