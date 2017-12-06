import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit, OnChanges {

  @Input() productInfo: Product;
  public productSubItems = [];
  public selectedImgId = '0';

  constructor() { }

  ngOnInit() {
  }

  public userSelectedImage(subItem) {
    this.selectedImgId = subItem.productId;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['productInfo']) {
      this.productSubItems = this.productInfo.subItems;
    }
  }

}
