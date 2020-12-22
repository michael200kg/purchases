import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PurchaseItem} from "../../../@api-module";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-purchase-item-edit-dialog',
  templateUrl: './purchase-item-edit-dialog.component.html',
  styleUrls: ['./purchase-item-edit-dialog.component.css']
})
export class PurchaseItemEditDialogComponent implements OnInit {

  public purchaseItem: PurchaseItem;

  purchaseItemForm: FormGroup;

  constructor(private dialog: MatDialog,
              private dialogRef: MatDialogRef<PurchaseItemEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.purchaseItem = this.data.item;
     this.fillForm();
  }

  fillForm() {
      this.purchaseItemForm = this.fb.group({
        name: [this.purchaseItem.itemName, [Validators.required]]
      });
  }

  restoreModel() {
     this.purchaseItem.itemName = this.purchaseItemForm.get('name').value;
  }

  save() {
    this.restoreModel();
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }

}
