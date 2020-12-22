import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { PurchasesRoutingModule } from './purchases-routing.module';
import { FlexModule } from '@angular/flex-layout';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { PurchaseItemEditDialogComponent } from './purchase-edit/purchase-item-edit-dialog/purchase-item-edit-dialog.component';
import { PurchaseCheckComponent } from './purchase-check/purchase-check.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [PurchasesListComponent,
    PurchaseEditComponent,
    PurchaseItemEditDialogComponent,
    PurchaseCheckComponent],
  entryComponents: [PurchaseEditComponent,
    PurchaseItemEditDialogComponent,
    PurchaseCheckComponent],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
    FlexModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule
  ]
})
export class PurchasesModule {
}
