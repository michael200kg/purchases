import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateeItemEditDialogComponent } from './purchase-item-edit-dialog.component';

describe('PurchaseItemEditDialogComponent', () => {
  let component: TemplateeItemEditDialogComponent;
  let fixture: ComponentFixture<TemplateeItemEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateeItemEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateeItemEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
