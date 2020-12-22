import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseItemEditDialogComponent } from './purchase-item-edit-dialog.component';

describe('PurchaseItemEditDialogComponent', () => {
  let component: PurchaseItemEditDialogComponent;
  let fixture: ComponentFixture<PurchaseItemEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseItemEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseItemEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
