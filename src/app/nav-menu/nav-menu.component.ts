import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  public menuList = [ 'COOKWARE', 'COOKS\' TOOLS', 'CUTLEY', 'ELETRICS', 'BAKEWARE', 'FOOD', 'TABLETOP & BAR', 'HOMEKEEPING',
    'OUTDOOR', 'SALE', 'WILLIAM-SONOMA HOME' ];
  public currentTab = 'WILLIAM-SONOMA HOME';

  constructor() { }

  ngOnInit() {
  }

}
