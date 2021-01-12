import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MatButtonModule, MatSelectModule } from '@angular/material';


@NgModule({
  declarations: [ChangePasswordComponent, EditProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    FlexModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class ProfileModule {
}
