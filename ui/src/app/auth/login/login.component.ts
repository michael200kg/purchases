import { Component, OnInit } from '@angular/core';
import { UserAuth } from '../../@api-module';
import { UserFacade } from '../../@app-state-module';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private userService: UserFacade,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  login() {
    const userAuth: UserAuth = {username: this.username, password: this.password};
    this.userService.login(userAuth).subscribe(x => {
      if (x.isLoggedIn) {
        this.router.navigate(['/app/front/purchases/purchase-list'], {relativeTo: this.route})
            .then(result => {
            });
      }
    });
  }

}
