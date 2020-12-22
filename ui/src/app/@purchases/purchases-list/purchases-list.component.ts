import { Component, OnInit } from '@angular/core';
import { Purchase, PurchaseService } from '../../@api-module';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.css']
})
export class PurchasesListComponent implements OnInit {

  purchases: Purchase[] = [];
  refresh$ = new BehaviorSubject<string>('');

  constructor(private purchaseService: PurchaseService,
              private dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute) {
    this.refresh$.pipe(switchMap(x => this.purchaseService.getPurchases(true)))
        .subscribe(x => {
          this.purchases = x.filter(y => y.items.some(z => !z.checked));
          this.purchases.push(
              ...x.filter(y => y.items.map(z => z.checked).reduce((z1, z2) => z1 && z2))
          );
        });
  }

  ngOnInit() {
    this.refreshTable();
  }

  refreshTable() {
    this.refresh$.next('');
  }

  createPurchase() {

    this.router.navigate(['/app/front/purchases/purchase-edit', {purchaseId: 0}], {relativeTo: this.route}).then(() => {
      this.refreshTable();
    });

  }

  editPurchase(id: number) {
    this.router.navigate(['/app/front/purchases/purchase-edit', {purchaseId: id}], {relativeTo: this.route}).then(() => {
      this.refreshTable();
    });
  }

  checkPurchase(id: number) {
    this.router.navigate(['/app/front/purchases/purchase-check', {purchaseId: id}], {relativeTo: this.route}).then(() => {
      this.refreshTable();
    });
  }

  deletePurchase(id: number) {
    if (confirm('Действительно хотите удалить этот список покупок?')) {
      this.purchaseService.deletePurchase(id).subscribe(() => {
        this.refreshTable();
      });
    }
  }

  getCheckedClass(testPurchase: Purchase): string {
    return testPurchase && testPurchase.items && testPurchase.items.some(item => !item.checked) ?
        'unchecked-item' : 'checked-item';
  }

}
