import { Component, OnInit } from '@angular/core';
import { Purchase, PurchaseTemplate, PurchaseTemplateService } from '../../@api-module';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {

  templates: PurchaseTemplate[] = [];
  refresh$ = new BehaviorSubject<string>('');

  constructor(private templateService: PurchaseTemplateService,
              private dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute) {
    this.refresh$.pipe(switchMap(x => this.templateService.getTemplates()))
        .subscribe(x => {
          this.templates = x.sort((a, b) => b.id - a.id);
        });
  }

  ngOnInit() {
    this.refreshTable();
  }

  refreshTable() {
    this.refresh$.next('');
  }

  createTemplate() {
    this.router.navigate(['/app/front/templates/template-edit', {templateId: 0}], {relativeTo: this.route}).then(() => {
      this.refreshTable();
    });

  }

  editTemplate(id: number) {
    this.router.navigate(['/app/front/templates/template-edit', {templateId: id}], {relativeTo: this.route}).then(() => {
      this.refreshTable();
    });
  }

  deleteTemplate(id: number) {
    if (confirm('Действительно хотите удалить этот шаблон?')) {
      this.templateService.deleteTemplate(id).subscribe(() => {
        this.refreshTable();
      });
    }
  }

}
