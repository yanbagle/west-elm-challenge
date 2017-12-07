import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from '../services/product-service';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

// container comp holding the image and info display
export class ProductPageComponent implements OnInit {

  @Output() imageSelect: EventEmitter<any> = new EventEmitter();
  public productInfo: Product;
  public userSelectedImage: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // getting our mocked product info
    this.productService.getProductInfo('someId').subscribe(res => {
      this.productInfo = res;
    });
  }

  public emitSelectProduct(item) {
    this.imageSelect.emit(item);
    this.userSelectedImage = item.descTitle;
  }

}
