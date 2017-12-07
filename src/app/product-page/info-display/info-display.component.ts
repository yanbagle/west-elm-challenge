import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-info-display',
  templateUrl: './info-display.component.html',
  styleUrls: ['./info-display.component.css']
})
export class InfoDisplayComponent implements OnInit {

  @Input() productInfo: Product;

  constructor() { }

  ngOnInit() {
  }

}
