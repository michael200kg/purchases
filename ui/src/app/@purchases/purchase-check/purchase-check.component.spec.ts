import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCheckComponent } from './purchase-check.component';

describe('PurchaseEditComponent', () => {
  let component: PurchaseCheckComponent;
  let fixture: ComponentFixture<PurchaseCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
