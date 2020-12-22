import {Purchase} from "../../@api-module/model/purchase";
import {PurchaseItem} from "../../@api-module";

export class PurchaseModel implements Purchase {
    id?: number;
    createdDate?: Date;
    checked?: boolean;
    checkedDate?: Date;
    name?: string;
    text?: string;
    username?: string;
    shared?: boolean;
    sharedForUsername?: string;
    items?: Array<PurchaseItem>;


    constructor(id: number, createdDate: Date, checked: boolean, checkedDate: Date,
                name: string, text: string, username: string, shared: boolean,
                sharedForUsername: string, items: Array<PurchaseItem>) {
        this.id = id;
        this.createdDate = createdDate;
        this.checked = checked;
        this.checkedDate = checkedDate;
        this.name = name;
        this.text = text;
        this.username = username;
        this.shared = shared;
        this.sharedForUsername = sharedForUsername;
        this.items = items;
    }
}