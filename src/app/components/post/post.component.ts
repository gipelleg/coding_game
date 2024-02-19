import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.interface';
import { User } from '../../models/user.interface';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [DialogService]
})
export class PostComponent implements OnInit {
  title = 'angular_exercise';
  posts: Post[] = [];
  users: User[] = [];
  primaryColor = '$primary';
  layout!: 'list' | 'grid';
  visible = false;

  constructor(
    private postService: PostService,
    private userService: UserService
    ) {}

  ngOnInit(): void {
    this.layout = 'list';
    this.getPosts();
    this.getUsers();
  }

  getPosts() {
    this.postService.getAllPost().subscribe((response) => {
      this.posts = response;
    });
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response;
    })
  }

  findPublisher(userId: number) {
    return this.users.find(user => user.id === userId);
  }

  changeLayout() {
    if (this.layout === 'grid') {
      this.layout = 'list'
    } else if (this.layout === 'list'){
      this.layout = 'grid';
    }
  }
}
