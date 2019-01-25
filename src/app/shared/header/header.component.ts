import { Component, OnInit, NgModule } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  onTabChange($event: NgbTabChangeEvent) {
    if ($event.nextId == "/about") {
      this.router.navigate(['about']);
    } else if ($event.nextId == "/career") {
      this.router.navigate(['career']);
    } else if ($event.nextId == "/contact") {
      this.router.navigate(['contact']);
    } else if ($event.nextId == "/home") {
      this.router.navigate(['home']);
    } 
  }

  ngOnInit() {
  }

}
