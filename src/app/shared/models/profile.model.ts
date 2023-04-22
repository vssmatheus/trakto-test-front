import { IProduct } from './product.model';
import { ISubscription } from './subscription.model';

export interface IProfile {
  product: IProduct;
  current_locale: string;
  subscription: ISubscription;
}
