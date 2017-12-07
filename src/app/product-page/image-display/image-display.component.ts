import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit, OnChanges {

  @Input() productInfo: Product;
  @Output() imageSelect: EventEmitter<any> = new EventEmitter();
  public productSubItems = [];
  public selectedImgId = '0';

  constructor() { }

  ngOnInit() {
    this.imageSelect.emit({descTitle: 'French Blue'});
  }

  public userSelectedImage(subItem) {
    this.selectedImgId = subItem.productId;
    this.imageSelect.emit(subItem);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['productInfo'] && this.productInfo) {
      this.productSubItems = this.productInfo.subItems;
    }
  }

}
