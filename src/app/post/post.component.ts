import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
  post: Post

  constructor(public route: ActivatedRoute,
              public routing: Router) {
  }

  ngOnInit(): void {

    this.route.data.subscribe(data => {
      this.post = data['post']
    })
  }

  goTo4Post() {
    this.routing.navigate(['/posts/', 44])
  }
}
