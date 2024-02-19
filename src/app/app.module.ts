import { ApplicationConfig, NgModule } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CardModule } from 'primeng/card';

import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { PostComponent } from './components/post/post.component';
import { InitialsPipe } from './pipes/initials.pipe';
import { AvatarComponent } from './shared/avatar/avatar.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const components = [
  AppComponent,
  PostComponent,
  AvatarComponent,
  PostDetailsComponent,
  GridViewComponent,
  ListViewComponent,
  UserDetailsComponent
];

const pipes = [
  InitialsPipe
]

@NgModule({
  declarations: [
    ...components,
     ...pipes,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    DataViewModule,
    TagModule,
    ButtonModule,
    ProgressSpinnerModule,
    AvatarModule,
    AvatarGroupModule,
    DialogModule,
    DynamicDialogModule,
    CardModule
    /*TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),*/
  ],
})

export class AppModule {}
