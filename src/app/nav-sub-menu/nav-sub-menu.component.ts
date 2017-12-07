import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-nav-sub-menu',
  templateUrl: './nav-sub-menu.component.html',
  styleUrls: ['./nav-sub-menu.component.css']
})
export class NavSubMenuComponent implements OnInit, OnChanges {

  @Input() descTitle: string;
  public breadCrumbs: string[];

  constructor() { }

  ngOnInit() {
    // mock our bread crumbs
    this.breadCrumbs = ['Home', 'Homekeeping', 'Aprons', 'Adult Aprons', 'Williams-Sonoma Classic Apron'];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['descTitle'] && this.breadCrumbs) {
      this.breadCrumbs.splice(-1, 1, this.descTitle);
    }
  }

}
