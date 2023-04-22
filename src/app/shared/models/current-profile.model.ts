import { IProduct } from './product.model';
import { ISubscription } from './subscription.model';

export interface ICurrentProfile {
  product: IProduct;
  current_locale: string;
  subscription: ISubscription;
}
