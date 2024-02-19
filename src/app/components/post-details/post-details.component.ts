import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Post } from '../../models/post.interface';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  user!: User;
  post!: Post;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
    ) { }

  ngOnInit() {
    this.user = this.config.data.user;
    this.post = this.config.data.post;
  }



}
