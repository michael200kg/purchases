/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserFacade } from '../../@app-state-module';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {
  constructor(
    private userFacade: UserFacade,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.userFacade.logout().subscribe(userState => {
      if (!userState.isLoggedIn) {
        this.router.navigate(['/auth/login'])
          .then(() => console.log('Redirecting user$ to login after Logout'));
      }
    });
  }
}
