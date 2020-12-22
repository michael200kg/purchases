import { Component, OnInit } from '@angular/core';
import { UserFacade } from '../../@app-state-module';
import { User, UserService } from '../../@api-module';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user: User = {username: '', fio: ''};

  constructor(private userFacade: UserFacade,
              private userService: UserService/*,
               private router: Router*/) {
  }

  ngOnInit() {
    this.userFacade.userState$.subscribe(x => {
      this.user = x.user;
    });
  }

  update() {
    this.userService.updateUser(this.user).subscribe(x => {
      this.user = x;
      // this.router.navigate(['/app/front/purchases']).then(() => {});
    });
  }

}
