import { Component, OnInit } from '@angular/core';
import { PurchaseService, PurchaseTemplate, PurchaseTemplateItem, PurchaseTemplateService } from '../../@api-module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TemplateModel } from '../model/template-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserFacade } from '../../@app-state-module';
import { TemplateItemEditDialogComponent } from './template-item-edit-dialog/template-item-edit-dialog.component';

@Component({
  selector: 'app-template-edit',
  templateUrl: './template-edit.component.html',
  styleUrls: ['./template-edit.component.css']
})
export class TemplateEditComponent implements OnInit {

  public template: PurchaseTemplate;
  public title: string;
  public buttonLabel: string;
  public mode: string;
  private username = 'michael';

  templateForm: FormGroup;

  constructor(private fb: FormBuilder,
              private templateService: PurchaseTemplateService,
              private purchaseService: PurchaseService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,
              private userFacade: UserFacade) {
    userFacade.userState$.subscribe(x => {
      this.username = x.user.username;
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(x => {
      const id = Number(x.get('templateId'));
      if (id > 0) {
        this.templateService.getTemplateById(id).subscribe(t => {
              this.template = t;
              this.mode = 'UPDATE';
              this.fillFormGroup(this.template);
            }
        );
      } else {
        this.template = new TemplateModel(null, null, null, this.username, []);
        this.mode = 'CREATE';
        this.fillFormGroup(this.template);
      }

    });
    this.title = 'Изменение шаблона';
    this.buttonLabel = 'OK';

  }

  addItem() {
    const itemName = this.templateForm.get('itemName').value;
    if (itemName) {
      const newItem: PurchaseTemplateItem = {
        id: null, itemName,
        itemDescription: null, purchaseTemplateId: this.template.id
      };
      this.template.items.push(newItem);
      this.templateForm.get('itemName').patchValue(null);
    }

  }

  //
  // toggleActivity(id: number) {
  //   const item: PurchaseItem = this.purchase.items.find(x => x.id === id);
  //   item.active = !item.active;
  //   this.purchase.items = this.sortItems(this.purchase.items);
  // }

  deleteItem(id: number) {
    this.template.items = this.template.items.filter(x => x.id !== id);
  }

  editItem(id: number) {
    const item = this.getItemById(id);
    if (item !== null) {
      const config: MatDialogConfig = {
        data: {item},
        maxWidth: '100%',
        width: '100%'
      };
      const editDialogRef = this.dialog.open(TemplateItemEditDialogComponent, config);
      editDialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.template.items = this.template.items.map(x =>
              x.id === id ? editDialogRef.componentInstance.templateItem : x);
        }
      });
    }

  }

  fillFormGroup(pt: PurchaseTemplate) {
    this.templateForm = this.fb.group({
      name: [pt.name, [Validators.required]],
      itemName: [null]
    });
  }

  updateEntity() {
    this.template.name = this.templateForm.get('name').value;
  }

  resolveService(template: PurchaseTemplate): Observable<any> {
    return this.mode === 'UPDATE' ? this.templateService.editTemplate(template) :
        this.templateService.createTemplate(template);
  }

  save() {
    this.updateEntity();
    this.resolveService(this.template).subscribe(() => {
      this.router.navigate(['/app/front/templates/template-list']).then(() => {
      });
    });
  }

  createPurchase() {
    this.updateEntity();
    this.purchaseService.createFromTemplate(this.template).subscribe(x => {
      this.router.navigate(['/app/front/purchases/purchase-edit', {purchaseId: x.id}], {relativeTo: this.route}).then(() => {
      });
    });
  }

  getItemById(id: number): PurchaseTemplateItem {
    return this.template.items && this.template.items.length > 0 ?
        this.template.items.find(x => x.id === id) : null;
  }

}
