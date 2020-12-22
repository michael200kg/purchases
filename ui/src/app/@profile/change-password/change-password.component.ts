import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PasswordUpdateHolder, UserService } from "../../@api-module";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  oldPassword: string;
  newPassword: string;

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {

  }

  change() {
    if (this.oldPassword !== null && this.newPassword !== null) {
      const passwordHolder: PasswordUpdateHolder = {oldPassword: this.oldPassword, newPassword: this.newPassword};
      this.userService.updatePassword(passwordHolder).subscribe(x => {
        this.router.navigate(['/app/purchases']).then(() => {
        });
      });
    } else {
      alert('Оба пароля обязательны для заполнения!')
    }
  }


  exit() {
    this.router.navigate(['/app/purchases']).then(() => {
    });
  }

}
