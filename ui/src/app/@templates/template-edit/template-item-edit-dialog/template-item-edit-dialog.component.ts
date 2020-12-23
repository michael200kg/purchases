import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PurchaseTemplateItem } from '../../../@api-module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-item-edit-dialog',
  templateUrl: './template-item-edit-dialog.component.html',
  styleUrls: ['./template-item-edit-dialog.component.css']
})
export class TemplateItemEditDialogComponent implements OnInit {

  public templateItem: PurchaseTemplateItem;

  templateItemForm: FormGroup;

  constructor(private dialog: MatDialog,
              private dialogRef: MatDialogRef<TemplateItemEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.templateItem = this.data.item;
    this.fillForm();
  }

  fillForm() {
    this.templateItemForm = this.fb.group({
      name: [this.templateItem.itemName, [Validators.required]]
    });
  }

  restoreModel() {
    this.templateItem.itemName = this.templateItemForm.get('name').value;
  }

  save() {
    this.restoreModel();
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }

}
