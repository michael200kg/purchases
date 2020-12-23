import { PurchaseTemplate, PurchaseTemplateItem } from '../../@api-module';

export class TemplateModel implements PurchaseTemplate {
  id?: number;
  name?: string;
  text?: string;
  username?: string;
  items?: PurchaseTemplateItem[];


  constructor(id: number, name: string, text: string, username: string,
              items: PurchaseTemplateItem[]) {
    this.id = id;
    this.name = name;
    this.text = text;
    this.username = username;
    this.items = items;
  }
}
