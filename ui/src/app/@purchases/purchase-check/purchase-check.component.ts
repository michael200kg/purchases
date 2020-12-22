import { Component, OnInit } from '@angular/core';
import { Purchase, PurchaseItem, PurchaseItemService, PurchaseService } from '../../@api-module';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PurchaseItemEditDialogComponent } from '../purchase-edit/purchase-item-edit-dialog/purchase-item-edit-dialog.component';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-check.component.html',
  styleUrls: ['./purchase-check.component.css']
})
export class PurchaseCheckComponent implements OnInit {

  public purchase: Purchase;
  public title: string;
  public buttonLabel: string;
  public mode: string;

  constructor(private fb: FormBuilder,
              private purchaseService: PurchaseService,
              private purchaseItemService: PurchaseItemService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(x => {
      const id = Number(x.get('purchaseId'));
      if (id > 0) {
        this.purchaseService.getPurchaseById(id, false).subscribe(p => {
              this.purchase = p;
              this.sortItems();
              this.mode = 'UPDATE';
            }
        );
      }

    });
    this.title = 'Изменение списка';
    this.buttonLabel = 'OK';

  }

  sortItems() {
    if (this.purchase.items && this.purchase.items.length > 0) {
      const checked = this.purchase.items.filter(x => x.checked);
      const unchecked = this.purchase.items.filter(x => !x.checked);
      this.purchase.items = unchecked.sort((x1, x2) => x1.itemName > x2.itemName ? 1 : -1);
      this.purchase.items.push(...checked.sort((x1, x2) => x1.itemName > x2.itemName ? 1 : -1));
    }
  }

  toggle(itemId: number) {
    this.purchaseItemService.togglePurchaseItem(itemId).subscribe(() => {
      this.purchase.items.forEach(x => {
        if (x.id === itemId) {
          if (x.checked) {
            x.checked = false;
            x.checkedDate = null;
          } else {
            x.checked = true;
            x.checkedDate = new Date();
          }
        }

      });
      this.sortItems();

    });
  }

  editItem(item: PurchaseItem) {
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
              x.id === item.id ? editDialogRef.componentInstance.purchaseItem : x);
          this.purchaseService.editPurchase(this.purchase).subscribe(() => {
          });
        }
      });
    }

  }

}
