import { Component, OnInit } from '@angular/core';
import { Purchase, PurchaseItem, PurchaseService, User, UserService } from '../../@api-module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseModel } from '../model/purchase-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PurchaseItemEditDialogComponent } from './purchase-item-edit-dialog/purchase-item-edit-dialog.component';
import { UserFacade } from '../../@app-state-module';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styleUrls: ['./purchase-edit.component.css']
})
export class PurchaseEditComponent implements OnInit {

  public purchase: Purchase;
  public title: string;
  public buttonLabel: string;
  public mode: string;
  public users: User[];
  private username = 'michael';

  purchaseForm: FormGroup;

  constructor(private fb: FormBuilder,
              private purchaseService: PurchaseService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,
              private userService: UserService,
              private userFacade: UserFacade) {
    userFacade.userState$.subscribe(x => {
      this.username = x.user.username;
    });
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(x => {
      this.users = x;
    });
    this.route.paramMap.subscribe(x => {
      const id = Number(x.get('purchaseId'));
      if (id > 0) {
        this.purchaseService.getPurchaseById(id, true).subscribe(p => {
              this.purchase = p;
              this.purchase.items = this.sortItems(this.purchase.items);
              this.mode = 'UPDATE';
              this.fillFormGroup(this.purchase);
            }
        );
      } else {
        this.purchase = new PurchaseModel(null, new Date(), false, null,
            null, null, this.username, false,
            null, []);
        this.mode = 'CREATE';
        this.fillFormGroup(this.purchase);
      }

    });
    this.title = 'Изменение списка';
    this.buttonLabel = 'OK';

  }

  sortItems(items: PurchaseItem[]): PurchaseItem[] {
    let sortedItems = [];
    if (items && items.length > 0) {
      const activeItems = items.filter(x => x.active);
      const inactiveItems = items.filter(x => !x.active);
      sortedItems = activeItems.sort((x1, x2) => x1.itemName > x2.itemName ? 1 : -1);
      sortedItems.push(...inactiveItems.sort((x1, x2) => x1.itemName > x2.itemName ? 1 : -1));
    }
    return sortedItems;
  }

  addItem() {
    const itemName = this.purchaseForm.get('itemName').value;
    if (itemName) {
      const newItem: PurchaseItem = {
        id: null, itemName, checked: false,
        itemDescription: null, purchaseId: this.purchase.id
      };
      this.purchase.items.push(newItem);
      this.purchaseForm.get('itemName').patchValue(null);
    }

  }

  toggleActivity(id: number) {
    const item: PurchaseItem = this.purchase.items.find(x => x.id === id);
    item.active = !item.active;
    this.purchase.items = this.sortItems(this.purchase.items);
  }

  deleteItem(id: number) {
    this.purchase.items = this.purchase.items.filter(x => x.id !== id);
  }

  editItem(id: number) {
    const item = this.getItemById(id);
    if (item !== null) {
      const config: MatDialogConfig = {
        data: {item},
        maxWidth: '100%',
        width: '100%'
      };
      const editDialogRef = this.dialog.open(PurchaseItemEditDialogComponent, config);
      editDialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.purchase.items = this.purchase.items.map(x =>
              x.id === id ? editDialogRef.componentInstance.purchaseItem : x);
        }
      });
    }

  }

  fillFormGroup(p: Purchase) {
    this.purchaseForm = this.fb.group({
      name: [p.name, [Validators.required]],
      itemName: [null],
      sharedForUsername: [p.sharedForUsername]
    });
  }

  updateEntity() {
    this.purchase.name = this.purchaseForm.get('name').value;
    this.purchase.sharedForUsername = this.purchaseForm.get('sharedForUsername').value;
  }

  resolveService(purchase: Purchase): Observable<any> {
    return this.mode === 'UPDATE' ? this.purchaseService.editPurchase(purchase) :
        this.purchaseService.createPurchase(purchase);
  }

  save() {
    this.updateEntity();
    this.resolveService(this.purchase).subscribe(() => {
      this.router.navigate(['/app/front/purchases/purchase-list']).then(() => {
      });
    });
  }

  getItemById(id: number): PurchaseItem {
    return this.purchase.items && this.purchase.items.length > 0 ?
        this.purchase.items.find(x => x.id === id) : null;
  }

}
