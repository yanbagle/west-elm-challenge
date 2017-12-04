import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Product} from '../models/Product';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  // mocking our products info, returns an array of Products
  public getProductInfo(id: string): Observable<Product[]> {
    return Observable.of(
      [
        {
          productId: '0',
          smallImg: '../../assets/images/product-small-a.jpg',
          largeImg: '../../assets/images/product-large-a.jpg',
        },
        {
          productId: '1',
          smallImg: '../../assets/images/product-small-b.jpg',
          largeImg: '../../assets/images/product-large-b.jpg',
        },
        {
          productId: '2',
          smallImg: '../../assets/images/product-small-c.jpg',
          largeImg: '../../assets/images/product-large-c.jpg',
        },
        {
          productId: '3',
          smallImg: '../../assets/images/product-small-d.jpg',
          largeImg: '../../assets/images/product-large-d.jpg',
        },
      ]
    );
  }

}
