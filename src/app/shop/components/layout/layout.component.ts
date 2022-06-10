import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isVisibleSidebar = true;

  constructor() { }

  ngOnInit(): void {
  }

  showSidebar = () => {
    this.isVisibleSidebar = true;
  }

  hideSidebar = () => {
    this.isVisibleSidebar = false;
  }

}
