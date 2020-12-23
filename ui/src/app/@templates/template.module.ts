import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateListComponent } from './templates-list/template-list.component';
import { FlexModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateEditComponent } from './template-edit/template-edit.component';
import { TemplateItemEditDialogComponent } from './template-edit/template-item-edit-dialog/template-item-edit-dialog.component';

const MODULES = [
  CommonModule,
  TemplateRoutingModule,
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
];

const ENTRY_COMPONENTS = [
  TemplateListComponent,
  TemplateEditComponent,
  TemplateItemEditDialogComponent
];

const DECLARATIONS = [
  ...ENTRY_COMPONENTS
];

@NgModule({
  declarations: DECLARATIONS,
  entryComponents: ENTRY_COMPONENTS,
  imports: MODULES
})
export class TemplateModule {
}
