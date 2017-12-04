import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-sub-menu',
  templateUrl: './nav-sub-menu.component.html',
  styleUrls: ['./nav-sub-menu.component.css']
})
export class NavSubMenuComponent implements OnInit {

  public breadCrumbs: string[];

  constructor() { }

  ngOnInit() {
    // mock our bread crumbs
    this.breadCrumbs = ['Home', 'Homekeeping', 'Aprons', 'Adult Aprons', 'Williams-Sonoma Classic Apron, French Blue'];
  }

}
