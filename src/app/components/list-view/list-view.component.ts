import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post.interface';
import { User } from '../../models/user.interface';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input() post!: Post;
  @Input() users: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  findPublisher(userId: number) {
    return this.users.find(user => user.id === userId);
  }

  goToUserDetails(user: User) {
    this.userService.setSelectedUser(user);
    this.router.navigateByUrl('user-details');
  }

}
