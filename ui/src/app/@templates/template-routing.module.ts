import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateListComponent } from './templates-list/template-list.component';
import { TemplateEditComponent } from './template-edit/template-edit.component';

const templateRoutes: Routes = [
  {
    path: 'template-list',
    component: TemplateListComponent
  },
  {
    path: 'template-edit',
    component: TemplateEditComponent
  },
  {
    path: '**',
    component: TemplateListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(templateRoutes)],
  exports: [RouterModule],
})
export class TemplateRoutingModule {
}
