import { Component, Input, OnInit } from '@angular/core';
import { PostDetailsComponent } from '../../components/post-details/post-details.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { User } from '../../models/user.interface';
import { Post } from '../../models/post.interface';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() user!: User;
  @Input() post!: Post;

  ref: DynamicDialogRef | undefined;

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }

  showDialog() {
    const data = {
      user: this.user,
      post: this.post
    };

    this.ref = this.dialogService.open(PostDetailsComponent, {
        header: 'Dettagli del Post',
        width: '70%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true,
        data: data
    });

    /*this.ref.onClose.subscribe((product: Post) => {
        if (product) {
            this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
        }
    });*/
  }

}
