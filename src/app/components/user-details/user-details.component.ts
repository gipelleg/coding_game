import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user?: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.selectedUser$.subscribe(user => {
      this.user = user;
    });
  }

}
