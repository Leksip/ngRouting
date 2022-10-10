import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms'
import {HomeComponent} from './home/home.component'
import {PostsComponent} from './posts/posts.component'
import {PostComponent} from './post/post.component'
import {RouterModule} from "@angular/router"
import {AppRoutingModule} from "./app-routing.module";
import { ErrorComponent } from './error/error.component';
import {AboutModule} from "./about/about.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
