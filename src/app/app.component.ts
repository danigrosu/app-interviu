import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  activateA = false;
  activateB = false;
  
  constructor( private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.activateA = false;
        this.activateB = false;

        if(val.url.indexOf('/a') != -1) {
          this.activateA = true;
        }
        if(val.url.indexOf('/b') != -1) {
          this.activateB = true;
        }

      }
    });
  }

}
