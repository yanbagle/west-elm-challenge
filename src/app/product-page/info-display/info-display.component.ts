import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-info-display',
  templateUrl: './info-display.component.html',
  styleUrls: ['./info-display.component.css']
})
export class InfoDisplayComponent implements OnInit {

  @Input() productInfo: Product;
  public addToCart = false;

  constructor() { }

  ngOnInit() {
  }

  public addItemToCart() {
    this.addToCart = true;
    setTimeout(() => {
      this.addToCart = false;
    }, 1500);
  }

}
