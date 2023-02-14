import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderLookupComponent } from './rider-lookup.component';

describe('RiderLookupComponent', () => {
  let component: RiderLookupComponent;
  let fixture: ComponentFixture<RiderLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderLookupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiderLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
