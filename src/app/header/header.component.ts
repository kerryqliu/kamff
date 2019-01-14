import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headers = ['Home', 'About Us', 'Our Mission'];
  activeHeader = this.headers[0];

  setActive(name) {
    this.activeHeader = name;
    console.log(this.activeHeader);
  }
  constructor() { }

  ngOnInit() {
  }

}
