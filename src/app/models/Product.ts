export class Product {
  subItems: SubItem[];
  desc: string;
  descList: string[];
  price: number;
  name: string;
}

class SubItem {
  productId: string;
  descTitle: string;
  smallImg: string;
  largeImg: string;
}
