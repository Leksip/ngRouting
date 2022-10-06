import {Component} from '@angular/core'
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private routing: Router) {}
  goToPosts() {
this.routing.navigate(['/posts'])
  }
}