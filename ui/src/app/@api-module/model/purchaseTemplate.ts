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
import { PurchaseTemplateItem } from './purchaseTemplateItem';


export interface PurchaseTemplate { 
    id?: number;
    name?: string;
    text?: string;
    username?: string;
    items?: Array<PurchaseTemplateItem>;
}


