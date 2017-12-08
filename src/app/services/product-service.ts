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
  public getProductInfo(id: string): Observable<Product> {
    return Observable.of(
      {
        subItems: [
          {
            productId: '0',
            descTitle: 'French Blue',
            smallImg: 'assets/images/product-small-a.jpg',
            largeImg: 'assets/images/product-large-a.jpg',
          },
          {
            productId: '1',
            descTitle: 'Black',
            smallImg: 'assets/images/product-small-b.jpg',
            largeImg: 'assets/images/product-large-b.jpg',
          },
          {
            productId: '2',
            descTitle: 'Sage Green',
            smallImg: 'assets/images/product-small-c.jpg',
            largeImg: 'assets/images/product-large-c.jpg',
          },
          {
            productId: '3',
            descTitle: 'Claret Red',
            smallImg: 'assets/images/product-small-d.jpg',
            largeImg: 'assets/images/product-large-d.jpg',
          }
        ],
        desc: `A generously sized apron is a necessity in any kitchen, and ours will brighten yours with lively color. 
        Sewn of thick cotton, it can be personalized or monogrammed with up to nine characters, all the same height, 
        emboilered in your choice of color. An apron of this quality makes a welcome gift for any cook.` ,
        descList: [
          'Durable 100% cotton construction',
          'Adjustable neckband ensures a good fit',
          'Roomy front pockets hold small tools',
          'Machine-wash'
        ],
        price: 19.55,
        name: 'Williams-Sonoma Classic Apron'
      }
    );
  }

}
