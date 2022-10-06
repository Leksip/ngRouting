import {Component, OnInit} from '@angular/core'
import {PostsService} from '../posts.service'
import {ActivatedRoute, Params, QueryParamsHandling, Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor(public postsService: PostsService,
              public router: Router,
              public route: ActivatedRoute
  ) {
  }

  showId = false

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
        console.log(params)
        this.showId = !!params['showId']
      }
    )
  }

  showIds() {
    this.router.navigate(['/posts'], {queryParams: {showId: true}})
  }
}
