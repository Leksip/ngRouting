import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PostsComponent} from "./posts/posts.component";
import {PostComponent} from "./post/post.component";
import {ErrorComponent} from "./error/error.component";
import {AuthGuard} from "./auth.guard";
import {PostResolver} from "./post.resolver";

//http://localhost:4200/ -> HomeComponent

// const routes: Routes = [
//   {path: '', component: HomeComponent},
//
//   {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
//   {path: 'posts/:id', component: PostComponent, resolve: {post: PostResolver}},
//   {path: 'error', component: ErrorComponent},
//   {path: '**', redirectTo: '/error'}
// ];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
    {path: 'posts/:id', component: PostComponent, resolve: {post: PostResolver}},
    {path: 'error', component: ErrorComponent},
    {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
    {path: '**', redirectTo: '/error'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
