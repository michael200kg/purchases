/**
 * Purchases API
 * Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.
 *
 * The version of the OpenAPI document: 0.1.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';



import { Configuration }                                     from '../configuration';



export interface PurchaseItemServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
     * Toggle purchase item check
     * 
     * @param purchaseItemId Id of the PurchaseItem
     */
    togglePurchaseItem(purchaseItemId: number, extraHttpRequestParams?: any): Observable<{}>;

}
