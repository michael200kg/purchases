import { Component, OnInit } from '@angular/core';
import { UserFacade } from '../../@app-state-module';
import { User } from '../../@api-module';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  user: User;

  constructor(private userFacade: UserFacade) {
    this.userFacade.userState$.subscribe(x => this.user = x.user);
  }

  ngOnInit() {
  }

  getLogoImage(): string {
    return this.user.gender === 'male' ? 'jenkins.svg' : 'woman-avatar.png';
  }

}
