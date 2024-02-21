import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranDetailsComponent } from './restauran-details.component';

describe('RestauranDetailsComponent', () => {
  let component: RestauranDetailsComponent;
  let fixture: ComponentFixture<RestauranDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestauranDetailsComponent]
    });
    fixture = TestBed.createComponent(RestauranDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
