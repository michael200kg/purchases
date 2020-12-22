import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { FrontComponent } from './front/front.component';
import { RouterModule } from '@angular/router';
import { FrontRoutingModule } from './front-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FlexModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [FrontComponent],
  imports: [
    CommonModule,
    AuthModule,
    RouterModule,
    FrontRoutingModule,
    MatMenuModule,
    MatIconModule,
    FlexModule,
    MatButtonModule
  ]
})
export class FrontModule {
}
