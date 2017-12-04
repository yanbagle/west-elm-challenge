import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {

  @Input() productInfo: Product[];
  public selectedImgId = '0';

  constructor() { }

  ngOnInit() {
  }

  public userSelectedImage(product: Product) {
    this.selectedImgId = product.productId;
  }

}
