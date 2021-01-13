import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LogoutComponent } from './logout/logout.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FlexModule,
    FormsModule,
    CommonModule,
    MatButtonModule
  ]
})
export class AuthModule {
}
