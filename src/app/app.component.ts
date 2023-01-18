import { Component,OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectpluralsight';
    constructor(public router: ActivatedRoute){
      console.log(this.router.url);
    }
}