import { IProduct } from './product.model';

export interface IGateway {
  product: IProduct;
  interval: any;
  gateway_id: string;
}
