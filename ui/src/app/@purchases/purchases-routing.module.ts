import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PurchasesListComponent} from './purchases-list/purchases-list.component';
import {PurchaseEditComponent} from './purchase-edit/purchase-edit.component';
import {PurchaseCheckComponent} from './purchase-check/purchase-check.component';

const purchasesRoutes: Routes = [

    {
        path: 'purchase-list',
        component: PurchasesListComponent
    },
    {
        path: 'purchase-edit',
        component: PurchaseEditComponent
    },
    {
        path: 'purchase-check',
        component: PurchaseCheckComponent
    },
    {
        path: '**',
        component: PurchasesListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(purchasesRoutes)],
    exports: [RouterModule],
})
export class PurchasesRoutingModule {
}
