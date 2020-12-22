export * from './auth.service';
import { AuthService } from './auth.service';
export * from './auth.serviceInterface'
export * from './purchase.service';
import { PurchaseService } from './purchase.service';
export * from './purchase.serviceInterface'
export * from './purchaseItem.service';
import { PurchaseItemService } from './purchaseItem.service';
export * from './purchaseItem.serviceInterface'
export * from './purchaseTemplate.service';
import { PurchaseTemplateService } from './purchaseTemplate.service';
export * from './purchaseTemplate.serviceInterface'
export * from './user.service';
import { UserService } from './user.service';
export * from './user.serviceInterface'
export const APIS = [AuthService, PurchaseService, PurchaseItemService, PurchaseTemplateService, UserService];
